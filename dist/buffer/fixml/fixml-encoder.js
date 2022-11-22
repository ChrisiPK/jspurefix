"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var FixmlEncoder_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixmlEncoder = void 0;
const contained_1 = require("../../dictionary/contained");
const ascii_1 = require("../ascii");
const msg_encoder_1 = require("../msg-encoder");
const elastic_buffer_1 = require("../elastic-buffer");
const moment = require("moment");
const definition_1 = require("../../dictionary/definition");
const tag_type_1 = require("../tag/tag-type");
const tsyringe_1 = require("tsyringe");
const di_tokens_1 = require("../../runtime/di-tokens");
let FixmlEncoder = FixmlEncoder_1 = class FixmlEncoder extends msg_encoder_1.MsgEncoder {
    constructor(buffer, definitions) {
        super(definitions);
        this.buffer = buffer;
        this.definitions = definitions;
        this.attributePerLine = false;
        this.eol = require('os').EOL;
        this.beginDoc = `<FIXML>${this.eol}`;
        this.endDoc = '</FIXML>';
        this.beginBatch = `<Batch>${this.eol}`;
        this.endBatch = '</Batch>';
    }
    static asString(sf, v) {
        switch (sf.definition.tagType) {
            case tag_type_1.TagType.String: {
                return v;
            }
            case tag_type_1.TagType.Int:
            case tag_type_1.TagType.Float:
            case tag_type_1.TagType.Length: {
                return v.toString();
            }
            case tag_type_1.TagType.Boolean: {
                return v ? 'Y' : 'N';
            }
            case tag_type_1.TagType.UtcTimestamp: {
                const d = v;
                return moment(d).utc().format('YYYY-MM-DDTHH:mm:ss.SSS');
            }
            case tag_type_1.TagType.UtcTimeOnly: {
                const d = v;
                return moment.utc(d).format('HH:mm:ss.SSS');
            }
            case tag_type_1.TagType.LocalDate: {
                const d = v;
                return moment(d).format('YYYY-MM-DD');
            }
            case tag_type_1.TagType.UtcDateOnly: {
                const d = v;
                return moment(d).utc(true).format('YYYY-MM-DD');
            }
        }
    }
    encodeSet(o, set) {
        const batch = o.Batch;
        const toWrite = batch || [o];
        let depth = batch ? 1 : 0;
        const buffer = this.buffer;
        const begin = this.beginDoc;
        const indent = '\t';
        const endBatch = batch ? this.endBatch : '';
        const eol = this.eol;
        buffer.reset();
        buffer.writeString(begin);
        if (batch) {
            this.batchStart(o, set, depth);
        }
        toWrite.forEach((next) => {
            this.toXml(next, set.abbreviation, set, depth + 1);
            buffer.writeString(eol);
        });
        if (batch) {
            buffer.writeString(`${indent}${endBatch}`);
        }
        buffer.writeString(this.endDoc);
    }
    batchStart(o, set, depth) {
        const buffer = this.buffer;
        const indent = '\t';
        const beginBatch = this.beginBatch;
        const hdr = o.StandardHeader;
        const eol = this.eol;
        buffer.writeString(`${indent}${beginBatch}`);
        if (hdr) {
            const h = set.fields[0];
            this.toXml(hdr, h.name, h.definition, depth + 1);
            buffer.writeString(eol);
        }
    }
    toXml(o, name, set, depth) {
        const buffer = this.buffer;
        const selfClose = '/>';
        const close = '>';
        const open = '<';
        const indent = '\t'.repeat(depth);
        const newLine = this.eol;
        const fields = this.getPopulatedFields(set, o);
        const eol = fields.length === 0 ? selfClose : close;
        buffer.writeString(`${indent}${open}`);
        buffer.writeString(`${name} `);
        this.attributes(o, set, depth, this.attributePerLine);
        buffer.writeString(`${eol}`);
        new contained_1.FieldsDispatch().dispatchFields(fields, {
            group: (g) => this.complexGroup(o, g, depth),
            component: (c) => this.complexComponent(o, c, depth)
        });
        if (fields.length) {
            const end = `${newLine}${indent}</${name}>`;
            buffer.writeString(`${end}`);
        }
    }
    getPopulatedFields(set, o) {
        const keys = Object.keys(o);
        const fields = keys.reduce((a, current) => {
            const field = set.localNameToField.get(current);
            if (field && !set.nameToLocalAttribute.containsKey(current)) {
                a.push(field);
            }
            return a;
        }, []);
        fields.sort((a, b) => a.position - b.position);
        return fields;
    }
    encodeAttribute(name, val) {
        if (val == null) {
            return;
        }
        const buffer = this.buffer;
        buffer.writeString(name);
        buffer.writeChar(ascii_1.AsciiChars.Equal);
        buffer.writeChar(ascii_1.AsciiChars.Dq);
        buffer.writeString(val);
        buffer.writeChar(ascii_1.AsciiChars.Dq);
    }
    attributes(o, set, depth, attributePerLine) {
        const newLine = this.eol;
        const indent = '\t'.repeat(depth + 1);
        const attributes = set.localAttribute;
        const buffer = this.buffer;
        if (attributes.length && attributePerLine) {
            buffer.writeString(newLine);
            buffer.writeString(indent);
        }
        const populatedAttributes = this.getPopulatedAttributes(o, attributes);
        for (let a = 0; a < populatedAttributes.values.length; ++a) {
            const last = a === populatedAttributes.values.length - 1;
            const f = populatedAttributes.fields[a];
            if (a || this.attributePerLine)
                buffer.writeChar(ascii_1.AsciiChars.Space);
            this.encodeAttribute(f.name, FixmlEncoder_1.asString(f, populatedAttributes.values[a]));
            if (!last && attributePerLine) {
                buffer.writeString(newLine);
                buffer.writeString(indent);
            }
        }
    }
    getPopulatedAttributes(o, attributes) {
        return attributes.reduce((a, f) => {
            let v = o[f.definition.name];
            if (v == null) {
                v = o[f.name];
            }
            if (v != null) {
                a.values.push(v);
                a.fields.push(f);
            }
            return a;
        }, {
            values: [],
            fields: []
        });
    }
    complexGroup(o, field, depth) {
        const gf = field;
        const elements = o[gf.definition.name];
        if (elements) {
            if (Array.isArray(elements)) {
                for (const e of elements) {
                    this.buffer.writeString(this.eol);
                    this.toXml(e, gf.name, gf.definition, depth + 1);
                }
            }
            else {
                throw new Error(`expected array for member ${gf.definition.name}`);
            }
        }
    }
    complexComponent(o, field, depth) {
        const cf = field;
        const def = cf.definition;
        const instance = o[def.name];
        if (instance) {
            this.buffer.writeString(this.eol);
            this.toXml(instance, cf.name, def, depth + 1);
        }
    }
    reset() {
        this.buffer.reset();
    }
    trim() {
        return this.buffer.copy();
    }
};
FixmlEncoder = FixmlEncoder_1 = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(di_tokens_1.DITokens.TransmitBuffer)),
    __param(1, (0, tsyringe_1.inject)(di_tokens_1.DITokens.Definitions)),
    __metadata("design:paramtypes", [elastic_buffer_1.ElasticBuffer, definition_1.FixDefinitions])
], FixmlEncoder);
exports.FixmlEncoder = FixmlEncoder;
//# sourceMappingURL=fixml-encoder.js.map