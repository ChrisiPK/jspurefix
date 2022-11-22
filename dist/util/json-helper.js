"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonHelper = void 0;
const contained_1 = require("../dictionary/contained");
const moment = require("moment");
const tag_type_1 = require("../buffer/tag/tag-type");
class JsonHelper {
    constructor(definitions) {
        this.definitions = definitions;
        this.dispatcher = new contained_1.FieldsDispatch();
    }
    static patchSimple(object, field) {
        let name = field.definition.name;
        let v = object[name];
        if (v == null) {
            v = object[field.name];
            if (v !== null) {
                name = field.name;
            }
        }
        if (v == null) {
            return;
        }
        switch (field.definition.tagType) {
            case tag_type_1.TagType.RawData: {
                object[name] = Buffer.from(v, 'utf8');
                break;
            }
            case tag_type_1.TagType.UtcTimestamp:
                const m = moment(v);
                const d = m.toDate();
                object[name] = d;
                break;
            case tag_type_1.TagType.UtcDateOnly: {
                const m = moment(v);
                object[name] = m.toDate();
                break;
            }
            case tag_type_1.TagType.UtcTimeOnly: {
                const m = moment(v);
                object[name] = m.toDate();
                break;
            }
            case tag_type_1.TagType.LocalDate: {
                const m = moment(v);
                object[name] = m.toDate();
                break;
            }
            case tag_type_1.TagType.Float: {
                object[name] = parseFloat(v);
                break;
            }
            case tag_type_1.TagType.Int:
            case tag_type_1.TagType.Length: {
                object[name] = parseInt(v, 10);
                break;
            }
        }
    }
    fromJson(fileName, msgType) {
        const msg = require(fileName);
        const def = this.definitions.message.get(msgType);
        if (!def) {
            return msg;
        }
        if (msg.Batch) {
            msg.Batch.forEach((m) => {
                this.patchJsonFields(def, m);
            });
        }
        else {
            this.patchJsonFields(def, msg);
        }
        return msg;
    }
    patchJsonFields(set, object) {
        if (!object) {
            return;
        }
        const dispatcher = {
            simple: (field) => JsonHelper.patchSimple(object, field),
            group: (gf) => this.patchGroup(object, gf),
            component: (cf) => this.patchComponent(object, cf)
        };
        this.dispatcher.dispatchFields(set.localAttribute, dispatcher);
        this.dispatcher.dispatchFields(set.fields, dispatcher);
    }
    patchComponent(object, cf) {
        const c = object[cf.name] || object[cf.definition.name];
        if (c) {
            this.patchJsonFields(cf.definition, c);
        }
    }
    patchGroup(object, gf) {
        const arr = object[gf.definition.name] || object[gf.name];
        if (arr) {
            arr.forEach((o) => {
                this.patchJsonFields(gf.definition, o);
            });
        }
    }
}
exports.JsonHelper = JsonHelper;
//# sourceMappingURL=json-helper.js.map