"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldEnum = void 0;
class FieldEnum {
    constructor(key, val, description) {
        this.key = key;
        this.val = val;
        this.description = description;
    }
    toString() {
        return `${this.key} = ${this.val}`;
    }
}
exports.FieldEnum = FieldEnum;
//# sourceMappingURL=field-enum.js.map