"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagPos = void 0;
class TagPos {
    constructor(position, tag, start, len) {
        this.position = position;
        this.tag = tag;
        this.start = start;
        this.len = len;
    }
    static compare(lhs, rhs) {
        if (lhs.tag < rhs.tag) {
            return -1;
        }
        if (lhs.tag > rhs.tag) {
            return 1;
        }
        if (lhs.tag === rhs.tag && lhs.start === rhs.start) {
            return 0;
        }
        return ((lhs.start < rhs.start) ? -1 : ((lhs.start > rhs.start) ? 1 : 0));
    }
    static binarySearch(ar, tag) {
        let m = 0;
        let n = ar.length - 1;
        while (m <= n) {
            const k = (n + m) >> 1;
            const cmp = tag - (ar[k].tag);
            if (cmp > 0) {
                m = k + 1;
            }
            else if (cmp < 0) {
                n = k - 1;
            }
            else {
                return k;
            }
        }
        return -m - 1;
    }
    assign(position, tag, start, len) {
        this.position = position;
        this.tag = tag;
        this.start = start;
        this.len = len;
    }
    toString() {
        return `[${this.position}] = ${this.tag} (${this.start}..${this.start + this.len})`;
    }
    clone() {
        return new TagPos(this.position, this.tag, this.start, this.len);
    }
}
exports.TagPos = TagPos;
//# sourceMappingURL=tag-pos.js.map