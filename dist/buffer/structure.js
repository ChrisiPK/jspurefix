"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Structure = void 0;
const segment_summary_1 = require("./segment/segment-summary");
class Structure {
    constructor(tags, segments) {
        this.tags = tags;
        this.segments = segments;
        this.layout = null;
        this.layout = this.boundLayout();
    }
    msg() {
        return this.segments[this.segments.length - 2];
    }
    summary() {
        return this.segments.map(((s) => segment_summary_1.SegmentSummary.fromDescription(s)));
    }
    firstContainedWithin(name, segment) {
        const all = this.layout[name];
        if (!all) {
            return null;
        }
        let ret = null;
        if (!Array.isArray(all)) {
            const instance = all;
            ret = segment.contains(instance) ? instance : null;
        }
        else {
            for (const instance of all) {
                ret = segment.contains(instance) ? instance : null;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    boundLayout(segment) {
        return this.segments.reduce((a, current) => {
            if (segment && !segment.contains(current)) {
                return a;
            }
            const name = current.name;
            const member = a[name];
            if (!member) {
                a[name] = current;
            }
            else {
                if (!Array.isArray(member)) {
                    a[name] = [member, current];
                }
                else {
                    member[member.length] = current;
                }
            }
            return a;
        }, {});
    }
}
exports.Structure = Structure;
//# sourceMappingURL=structure.js.map