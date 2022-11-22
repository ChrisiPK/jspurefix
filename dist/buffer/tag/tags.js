"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tags = void 0;
const tag_pos_1 = require("./tag-pos");
const types_1 = require("../../types");
const tag_type_1 = require("./tag-type");
class Tags {
    constructor(definitions, startingLength = 30 * 1000) {
        this.definitions = definitions;
        this.startingLength = startingLength;
        this.tagPos = new Array(this.startingLength);
        this.nextTagPos = 0;
    }
    static toJSType(simple) {
        switch (simple.definition.tagType) {
            case tag_type_1.TagType.String:
                return 'string';
            case tag_type_1.TagType.Int:
            case tag_type_1.TagType.Float:
            case tag_type_1.TagType.Length:
                return 'number';
            case tag_type_1.TagType.RawData:
                return 'Buffer';
            case tag_type_1.TagType.Boolean:
                return 'boolean';
            case tag_type_1.TagType.UtcTimestamp:
            case tag_type_1.TagType.UtcDateOnly:
            case tag_type_1.TagType.UtcTimeOnly:
            case tag_type_1.TagType.LocalDate:
                return 'Date';
            default:
                return 'string';
        }
    }
    static toType(type) {
        type = type || 'string';
        switch (type.toLowerCase()) {
            case 'currency':
            case 'string':
            case 'char': {
                return tag_type_1.TagType.String;
            }
            case 'int':
            case 'numingroup':
            case 'seqnum': {
                return tag_type_1.TagType.Int;
            }
            case 'qty':
            case 'percentage':
            case 'amt':
            case 'price':
            case 'priceoffset':
            case 'float': {
                return tag_type_1.TagType.Float;
            }
            case 'length': {
                return tag_type_1.TagType.Length;
            }
            case 'boolean': {
                return tag_type_1.TagType.Boolean;
            }
            case 'utctimestamp': {
                return tag_type_1.TagType.UtcTimestamp;
            }
            case 'localmktdate': {
                return tag_type_1.TagType.LocalDate;
            }
            case 'utcdateonly': {
                return tag_type_1.TagType.UtcDateOnly;
            }
            case 'utctimeonly': {
                return tag_type_1.TagType.UtcTimeOnly;
            }
            case 'data': {
                return tag_type_1.TagType.RawData;
            }
            default: {
                return tag_type_1.TagType.String;
            }
        }
    }
    clone() {
        const next = this.nextTagPos;
        const cloned = new Tags(this.definitions, next);
        cloned.nextTagPos = next;
        for (let i = 0; i < next; ++i) {
            cloned.tagPos[i] = this.tagPos[i].clone();
        }
        return cloned;
    }
    reset() {
        this.nextTagPos = 0;
    }
    store(start, len, tag) {
        const tagPtr = this.nextTagPos;
        if (tagPtr === this.tagPos.length) {
            this.expand();
        }
        const tp = this.tagPos[tagPtr];
        if (tp) {
            tp.assign(tagPtr, tag, start, len);
        }
        else {
            this.tagPos[tagPtr] = new tag_pos_1.TagPos(tagPtr, tag, start, len);
        }
        this.nextTagPos++;
    }
    expand() {
        const size = this.tagPos.length * 2;
        const tagPos = new Array(size);
        for (let i = 0; i < this.tagPos.length; ++i) {
            tagPos[i] = this.tagPos[i];
        }
        this.tagPos = tagPos;
    }
}
exports.Tags = Tags;
Tags.BeginString = types_1.MsgTag.BeginString;
Tags.BodyLengthTag = types_1.MsgTag.BodyLength;
Tags.CheckSumTag = types_1.MsgTag.CheckSum;
Tags.MsgTag = types_1.MsgTag.MsgType;
//# sourceMappingURL=tags.js.map