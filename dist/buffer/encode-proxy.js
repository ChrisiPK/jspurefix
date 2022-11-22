"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncodeProxy = void 0;
const contained_1 = require("../dictionary/contained");
const tag_type_1 = require("./tag/tag-type");
class EncodeProxy {
    constructor(definitions) {
        this.definitions = definitions;
    }
    static SimpleFieldCheck(field, val) {
        const definition = field.definition;
        if (definition.isEnum()) {
            const resolved = definition.containsEnum(val);
            if (!resolved) {
                throw new Error(`enum field ${field.name} does not support "${val}"`);
            }
        }
        switch (definition.tagType) {
            case tag_type_1.TagType.LocalDate:
            case tag_type_1.TagType.UtcTimeOnly:
            case tag_type_1.TagType.UtcDateOnly:
            case tag_type_1.TagType.UtcTimestamp: {
                const isDate = val instanceof Date;
                if (!isDate) {
                    throw new Error(`field ${field.name} expects Date but receives "${typeof val}"`);
                }
                break;
            }
            case tag_type_1.TagType.Boolean: {
                if (typeof (val) !== typeof (true)) {
                    throw new Error(`field ${field.name} expects boolean but receives "${typeof val}"`);
                }
                break;
            }
            case tag_type_1.TagType.String: {
                if (typeof (val) !== 'string') {
                    throw new Error(`field ${field.name} expects string but receives "${typeof val}"`);
                }
                break;
            }
            case tag_type_1.TagType.RawData: {
                const isBuffer = val instanceof Buffer;
                if (!isBuffer) {
                    throw new Error(`field ${field.name} expects Buffer but receives "${typeof val}"`);
                }
                break;
            }
            case tag_type_1.TagType.Int:
            case tag_type_1.TagType.Float:
            case tag_type_1.TagType.Length: {
                if (isNaN(val)) {
                    throw new Error(`field ${field.name} expects number but receives "${typeof val}"`);
                }
                break;
            }
        }
    }
    static checkProperties(wrapped, val) {
        const keys = Object.keys(val);
        for (let k of keys) {
            wrapped[k] = val[k];
        }
        return wrapped;
    }
    static ComponentFieldCheck(field, val) {
        const isComplex = typeof val === 'object';
        if (!isComplex) {
            throw new Error(`type ${field.name} is a component but is given type "${typeof val}"`);
        }
        const cf = field;
        return EncodeProxy.checkProperties(new Proxy({}, EncodeProxy.handler(cf.definition)), val);
    }
    static GroupFieldCheck(field, val) {
        const accepted = Array.isArray(val) || !isNaN(val);
        if (!accepted) {
            throw new Error(`type ${field.name} is a group and needs array or number, not "${typeof val}"`);
        }
        const gf = field;
        const j = val;
        const isNumber = !isNaN(val);
        if (isNumber) {
            const arr = new Array(j);
            for (let i = 0; i < j; ++i) {
                arr[i] = new Proxy({}, EncodeProxy.handler(gf.definition));
            }
            return arr;
        }
        else {
            const arr = val;
            for (let i = 0; i < arr.length; ++i) {
                arr[i] = EncodeProxy.checkProperties(new Proxy({}, EncodeProxy.handler(gf.definition)), arr[i]);
            }
            return arr;
        }
    }
    static handler(set) {
        return {
            set(target, prop, val) {
                const field = set.localNameToField.get(prop);
                if (!field) {
                    throw new Error(`type ${set.name} has no field named ${prop}`);
                }
                target[prop] = EncodeProxy.examine(field, val);
                return true;
            }
        };
    }
    static examine(field, val) {
        switch (field.type) {
            case contained_1.ContainedFieldType.Simple: {
                EncodeProxy.SimpleFieldCheck(field, val);
                break;
            }
            case contained_1.ContainedFieldType.Component: {
                val = EncodeProxy.ComponentFieldCheck(field, val);
                break;
            }
            case contained_1.ContainedFieldType.Group: {
                val = EncodeProxy.GroupFieldCheck(field, val);
                break;
            }
        }
        return val;
    }
    wrap(msgName) {
        const msg = this.definitions.message.get(msgName);
        if (!msg) {
            throw new Error(`no message defined for type ${msgName}`);
        }
        return new Proxy({}, EncodeProxy.handler(msg));
    }
}
exports.EncodeProxy = EncodeProxy;
//# sourceMappingURL=encode-proxy.js.map