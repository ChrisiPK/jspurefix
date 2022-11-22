"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentSummary = void 0;
class SegmentSummary {
    constructor(name, depth, startTag, startPosition, endTag, endPosition, delimiterTag, delimiterPositions) {
        this.name = name;
        this.depth = depth;
        this.startTag = startTag;
        this.startPosition = startPosition;
        this.endTag = endTag;
        this.endPosition = endPosition;
        this.delimiterTag = delimiterTag;
        this.delimiterPositions = delimiterPositions;
    }
    static fromDescription(d) {
        return new SegmentSummary(d.set.name, d.depth, d.startTag, d.startPosition, d.endTag, d.endPosition, d.delimiterTag, d.delimiterPositions || []);
    }
}
exports.SegmentSummary = SegmentSummary;
//# sourceMappingURL=segment-summary.js.map