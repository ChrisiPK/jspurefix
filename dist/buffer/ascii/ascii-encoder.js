"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsciiEncoder = void 0;
const contained_1 = require("../../dictionary/contained");
const msg_encoder_1 = require("../msg-encoder");
const time_formatter_1 = require("./time-formatter");
const ascii_chars_1 = require("./ascii-chars");
const tags_1 = require("../tag/tags");
const tag_type_1 = require("../tag/tag-type");
class AsciiEncoder extends msg_encoder_1.MsgEncoder {
    constructor(buffer, definitions, timeFormatter = new time_formatter_1.TimeFormatter(buffer), delimiter = ascii_chars_1.AsciiChars.Soh, logDelimiter = ascii_chars_1.AsciiChars.Pipe) {
        super(definitions);
        this.buffer = buffer;
        this.definitions = definitions;
        this.timeFormatter = timeFormatter;
        this.delimiter = delimiter;
        this.logDelimiter = logDelimiter;
        this.checkGroups = true;
        this.tags = new tags_1.Tags(definitions);
    }
    trim() {
        const b = this.buffer.copy();
        const delimiter = this.delimiter;
        const logDelimiter = this.logDelimiter;
        const tags = this.tags;
        if (delimiter !== logDelimiter) {
            for (let p = 0; p < tags.nextTagPos; ++p) {
                const tagPos = tags.tagPos[p];
                b.writeUInt8(delimiter, tagPos.start + tagPos.len);
            }
        }
        return b;
    }
    reset() {
        this.buffer.reset();
        this.tags.reset();
    }
    encodeSet(objectToEncode, set) {
        const summary = new AsciiEncodeSetSummary();
        this.encodeObject(objectToEncode, set, summary);
    }
    encodeObject(objectToEncode, set, state) {
        const fields = this.getFields(set, objectToEncode);
        new contained_1.FieldsDispatch().dispatchFields(fields, {
            simple: (sf) => {
                const val = objectToEncode[sf.name];
                if (val != null && val !== '') {
                    if (state.count === 0) {
                        state.firstSimple = sf;
                    }
                    state.lastSimple = sf;
                    state.count++;
                    this.encodeSimple(objectToEncode, set, sf, val);
                }
            },
            component: (cf) => {
                const instance = objectToEncode[cf.definition.name];
                if (instance) {
                    this.encodeObject(instance, cf.definition, state);
                }
            },
            group: (gf) => {
                this.encodeInstances(objectToEncode, gf);
            }
        });
    }
    getFields(set, o) {
        const keys = Object.keys(o);
        let j = 0;
        const fields = keys.reduce((a, current) => {
            const field = set.localNameToField.get(current);
            if (field) {
                a[j++] = field;
            }
            return a;
        }, new Array(keys.length));
        fields.sort((a, b) => a.position - b.position);
        return fields;
    }
    encodeInstances(o, gf) {
        const noOfField = gf.definition.noOfField;
        const instances = o[gf.name] || o[noOfField.name];
        const buffer = this.buffer;
        if (!Array.isArray(instances)) {
            throw new Error(`expected array instance for group ${noOfField.name}`);
        }
        if (instances) {
            const validator = new GroupValidator(gf);
            const test = validator.test;
            this.WriteTagEquals(noOfField.tag);
            const posValBegin = buffer.getPos();
            buffer.writeWholeNumber(instances.length);
            this.writeDelimiter(posValBegin, noOfField.tag);
            for (let field = 0; field < instances.length; ++field) {
                const instance = instances[field];
                test.reset();
                const summary = validator.getSummary(field);
                this.encodeObject(instance, gf.definition, summary);
                if (this.checkGroups) {
                    validator.assertInstanceValid(field);
                }
            }
        }
    }
    WriteTagEquals(tag) {
        const buffer = this.buffer;
        buffer.writeWholeNumber(tag);
        buffer.writeChar(ascii_chars_1.AsciiChars.Equal);
    }
    writeDelimiter(posValBegin, tag) {
        const delimiter = this.logDelimiter;
        const buffer = this.buffer;
        this.tags.store(posValBegin, buffer.getPos() - posValBegin, tag);
        buffer.writeChar(delimiter);
    }
    encodeSimple(o, set, sf, val) {
        const definition = sf.definition;
        const tag = definition.tag;
        const buffer = this.buffer;
        const delimiter = this.logDelimiter;
        const tf = this.timeFormatter;
        const pos = buffer.getPos();
        let posValBegin = 0;
        let tagType;
        if (typeof val === 'string') {
            switch (definition.tagType) {
                case tag_type_1.TagType.Boolean: {
                    tagType = definition.tagType;
                    const vs = val;
                    const first = vs.length > 0 ? vs.charAt(0) : 'N';
                    val = first === 'Y' || first === 'T';
                    break;
                }
                default: {
                    tagType = tag_type_1.TagType.String;
                }
            }
        }
        else {
            tagType = definition.tagType;
        }
        switch (tagType) {
            case tag_type_1.TagType.RawData: {
                break;
            }
            default: {
                this.WriteTagEquals(tag);
                posValBegin = buffer.getPos();
                break;
            }
        }
        switch (tagType) {
            case tag_type_1.TagType.String: {
                buffer.writeString(val);
                break;
            }
            case tag_type_1.TagType.Float: {
                buffer.writeNumber(val);
                break;
            }
            case tag_type_1.TagType.Int:
            case tag_type_1.TagType.Length: {
                buffer.writeWholeNumber(val);
                break;
            }
            case tag_type_1.TagType.Boolean: {
                buffer.writeBoolean(val);
                break;
            }
            case tag_type_1.TagType.UtcTimestamp: {
                tf.writeUtcTimestamp(val);
                break;
            }
            case tag_type_1.TagType.UtcTimeOnly: {
                tf.writeUtcTime(val);
                break;
            }
            case tag_type_1.TagType.UtcDateOnly: {
                tf.writeUtcDate(val);
                break;
            }
            case tag_type_1.TagType.LocalDate: {
                tf.writeLocalDate(val);
                break;
            }
            case tag_type_1.TagType.RawData: {
                const b = val;
                const lenField = set.fields[sf.position - 1];
                if (o[lenField.name] == null) {
                    this.WriteTagEquals(lenField.definition.tag);
                    buffer.writeWholeNumber(b.length);
                    buffer.writeChar(delimiter);
                }
                this.WriteTagEquals(tag);
                buffer.writeBuffer(b);
                posValBegin = buffer.getPos();
                break;
            }
            default: {
                buffer.writeString(val);
                break;
            }
        }
        this.writeDelimiter(posValBegin, tag);
        switch (tag) {
            case tags_1.Tags.BodyLengthTag:
                this.bodyLengthPos = pos + 2;
                break;
            case tags_1.Tags.MsgTag:
                this.msgTypePos = pos;
                break;
        }
    }
}
exports.AsciiEncoder = AsciiEncoder;
class GroupValidator {
    constructor(gf, first = new AsciiEncodeSetSummary(), test = new AsciiEncodeSetSummary()) {
        this.gf = gf;
        this.first = first;
        this.test = test;
    }
    getSummary(field) {
        return field === 0 ? this.first : this.test;
    }
    assertInstanceValid(field) {
        const first = this.first;
        const test = this.test;
        if (field === 0 && first.empty()) {
            throw new Error(`first group instance has no delimeter present ${this.gf.name}`);
        }
        if (field > 0 && test.empty()) {
            throw new Error(`group instance [${field}] has no delimeter present ${this.gf.name}`);
        }
        if (field > 0) {
            const firstTag = first.firstSimple.definition.tag;
            const tag = test.firstSimple.definition.tag;
            if (firstTag !== tag) {
                throw new Error(`group instance [${field}] inconsisent delimeter ${tag} expected tag ${firstTag}`);
            }
        }
    }
}
class AsciiEncodeSetSummary {
    constructor(firstSimple = null, lastSimple = null, count = 0) {
        this.firstSimple = firstSimple;
        this.lastSimple = lastSimple;
        this.count = count;
    }
    reset() {
        this.firstSimple = null;
        this.lastSimple = null;
        this.count = 0;
    }
    empty() {
        return this.firstSimple === null || this.count === 0;
    }
}
//# sourceMappingURL=ascii-encoder.js.map