"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentDescription = void 0;
const definition_1 = require("../../dictionary/definition");
const segment_type_1 = require("./segment-type");
class SegmentDescription {
    constructor(name, startTag, set, startPosition, depth, type) {
        this.name = name;
        this.startTag = startTag;
        this.set = set;
        this.startPosition = startPosition;
        this.depth = depth;
        this.type = type;
        this.endTag = 0;
        this.endPosition = 0;
        this.delimiterTag = 0;
    }
    contains(segment) {
        return segment.startPosition >= this.startPosition && segment.endPosition <= this.endPosition;
    }
    getInstance(instance) {
        const delimiters = this.delimiterPositions;
        if (!delimiters) {
            return null;
        }
        if (instance < 0 || instance >= delimiters.length) {
            return null;
        }
        const start = delimiters[instance];
        const end = instance < delimiters.length - 1 ?
            delimiters[instance + 1] - 1 :
            this.endPosition;
        const name = this.type === segment_type_1.SegmentType.Batch ? this.set.abbreviation : this.name;
        const d = new SegmentDescription(name, this.startTag, this.set, start, this.depth, this.type);
        d.endPosition = end;
        d.endTag = this.endTag;
        return d;
    }
    startGroup(tag) {
        this.delimiterTag = tag;
        this.delimiterPositions = [];
        this.containedDelimiterPositions = {};
    }
    addDelimiterPosition(position) {
        if (this.containedDelimiterPositions[position]) {
            return false;
        }
        this.delimiterPositions[this.delimiterPositions.length] = position;
        this.containedDelimiterPositions[position] = true;
        return true;
    }
    setCurrentField(tag) {
        this.currentField = this.set.localTag[tag] || this.set.tagToField[tag];
    }
    groupAddDelimiter(tag, position) {
        let delimiter = false;
        if (this.set instanceof definition_1.GroupFieldDefinition) {
            if (this.delimiterTag && tag === this.delimiterTag) {
                delimiter = this.addDelimiterPosition(position);
            }
        }
        return delimiter;
    }
    end(i, pos, endTag) {
        this.index = i;
        this.currentField = null;
        this.endPosition = pos;
        this.endTag = endTag;
    }
}
exports.SegmentDescription = SegmentDescription;
//# sourceMappingURL=segment-description.js.map