"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsciiView = void 0;
const structure_1 = require("../structure");
const msg_view_1 = require("../msg-view");
const time_formatter_1 = require("./time-formatter");
const types_1 = require("../../types");
const tag_type_1 = require("../tag/tag-type");
class AsciiView extends msg_view_1.MsgView {
    constructor(segment, buffer, structure, ptr, delimiter, writeDelimiter) {
        super(segment, structure);
        this.segment = segment;
        this.buffer = buffer;
        this.structure = structure;
        this.ptr = ptr;
        this.delimiter = delimiter;
        this.writeDelimiter = writeDelimiter;
        this.timeFormatter = new time_formatter_1.TimeFormatter(this.buffer);
    }
    clone() {
        const structure = this.structure;
        const buffer = this.buffer.clone();
        const segment = this.segment;
        const delimiter = this.delimiter;
        const writeDelimiter = this.writeDelimiter;
        if (structure) {
            return new AsciiView(segment, buffer, new structure_1.Structure(structure.tags.clone(), structure.segments), this.ptr, delimiter, writeDelimiter);
        }
        return new AsciiView(segment, buffer, null, this.ptr, delimiter, writeDelimiter);
    }
    replaceDelimiter(viewBuffer, replaceDelimiter) {
        const delimiter = replaceDelimiter !== null && replaceDelimiter !== void 0 ? replaceDelimiter : this.delimiter;
        if (delimiter !== this.writeDelimiter) {
            const structure = this.structure;
            const tags = structure.tags.tagPos;
            for (let i = 0; i < structure.tags.nextTagPos; ++i) {
                const tag = tags[i];
                const p = tag.start + tag.len;
                viewBuffer.writeUInt8(delimiter, p);
            }
        }
    }
    toBuffer(replaceDelimiter) {
        const viewBuffer = this.buffer.slice();
        this.replaceDelimiter(viewBuffer, replaceDelimiter);
        return viewBuffer;
    }
    checksum() {
        const t = this.getPosition(types_1.MsgTag.CheckSum);
        const structure = this.structure;
        const prev = structure.tags.tagPos[t - 1];
        const tp = prev.start + prev.len + 1;
        let cs = this.buffer.sum(tp);
        const delimiter = this.delimiter;
        const writeDelimiter = this.writeDelimiter;
        if (writeDelimiter !== delimiter) {
            const changes = structure.tags.nextTagPos - 1;
            cs -= changes * writeDelimiter;
            cs += changes * delimiter;
        }
        return cs % 256;
    }
    toTyped(field) {
        const position = this.getPosition(field.tag);
        if (position >= 0) {
            switch (field.tagType) {
                case tag_type_1.TagType.String: {
                    return this.stringAtPosition(position);
                }
                case tag_type_1.TagType.Float: {
                    return this.getNumber(position, true);
                }
                case tag_type_1.TagType.Int:
                case tag_type_1.TagType.Length: {
                    return this.getNumber(position);
                }
                case tag_type_1.TagType.Boolean: {
                    return this.getBoolean(field.tag);
                }
                case tag_type_1.TagType.UtcTimestamp: {
                    return this.getDateTime(field.tag, true);
                }
                case tag_type_1.TagType.UtcTimeOnly: {
                    return this.getTime(field.tag, true);
                }
                case tag_type_1.TagType.UtcDateOnly: {
                    return this.getDate(field.tag, true);
                }
                case tag_type_1.TagType.LocalDate: {
                    return this.getDate(field.tag, true);
                }
                case tag_type_1.TagType.RawData: {
                    return this.getBuffer(position);
                }
                default: {
                    return this.stringAtPosition(position);
                }
            }
        }
    }
    create(singleton) {
        return new AsciiView(singleton, this.buffer, this.structure, this.ptr, this.delimiter, this.writeDelimiter);
    }
    stringAtPosition(position) {
        const tags = this.structure.tags;
        if (position < 0 || position >= tags.nextTagPos) {
            return null;
        }
        const tag = tags.tagPos[position];
        return this.buffer.getString(tag.start, tag.start + tag.len);
    }
    getBuffer(position) {
        const tag = this.structure.tags.tagPos[position];
        return this.buffer.getBuffer(tag.start, tag.start + tag.len);
    }
    getNumber(position, isFloat = false) {
        const buffer = this.buffer;
        const tag = this.structure.tags.tagPos[position];
        if (isFloat) {
            return buffer.getFloat(tag.start, tag.start + tag.len - 1);
        }
        else {
            return buffer.getWholeNumber(tag.start, tag.start + tag.len - 1);
        }
    }
    getTime(tag, useUtc) {
        const formatter = this.timeFormatter;
        const position = this.getPosition(tag);
        const tagPos = this.structure.tags.tagPos[position];
        if (position < 0) {
            return null;
        }
        if (useUtc) {
            return formatter.getUtcTime(tagPos.start);
        }
        else {
            return formatter.getLocalTime(tagPos.start);
        }
    }
    getDate(tag, useUtc) {
        const formatter = this.timeFormatter;
        const position = this.getPosition(tag);
        if (position < 0) {
            return null;
        }
        const tagPos = this.structure.tags.tagPos[position];
        if (tagPos.len < 8) {
            return null;
        }
        if (useUtc) {
            return formatter.getUtcDate(tagPos.start);
        }
        else {
            return formatter.getLocalDate(tagPos.start);
        }
    }
    getDateTime(tag, useUtc) {
        const position = this.getPosition(tag);
        const tagPos = this.structure.tags.tagPos[position];
        const formatter = this.timeFormatter;
        if (position < 0) {
            return null;
        }
        if (tagPos.len < 8) {
            return null;
        }
        if (useUtc) {
            return formatter.getUtcTimestamp(tagPos.start, tagPos.start + tagPos.len);
        }
        else {
            return formatter.getLocalTimestamp(tagPos.start, tagPos.start + tagPos.len);
        }
    }
    getBoolean(tag) {
        const position = this.getPosition(tag);
        if (position < 0) {
            return null;
        }
        const tagPos = this.structure.tags.tagPos[position];
        return this.buffer.getBoolean(tagPos.start);
    }
}
exports.AsciiView = AsciiView;
//# sourceMappingURL=ascii-view.js.map