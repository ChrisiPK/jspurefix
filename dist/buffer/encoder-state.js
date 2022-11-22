"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncodedStatus = void 0;
class EncodedStatus {
    constructor() {
        this.ptr = 0;
    }
    elapsed() {
        return this.begin.getTime() - this.end.getTime();
    }
    reset() {
        this.ptr = 0;
        this.bodyLengthPos = 0;
        this.bodyEndPos = 0;
        this.begin = null;
        this.end = null;
    }
}
exports.EncodedStatus = EncodedStatus;
//# sourceMappingURL=encoder-state.js.map