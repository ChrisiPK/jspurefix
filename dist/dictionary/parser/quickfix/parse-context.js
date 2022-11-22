"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseContext = void 0;
const definition_1 = require("../../definition");
class ParseContext {
    constructor(name, defining, set) {
        this.name = name;
        this.defining = defining;
        this.set = set;
        this.required = false;
    }
    asMessage() {
        const res = this.set != null && this.set instanceof definition_1.MessageDefinition;
        if (res) {
            return (this.set);
        }
        else {
            return null;
        }
    }
    asComponent() {
        const res = this.set != null && this.set instanceof definition_1.ComponentFieldDefinition;
        if (res) {
            return (this.set);
        }
        else {
            return null;
        }
    }
    asGroup() {
        const res = this.set != null && this.set instanceof definition_1.GroupFieldDefinition;
        if (res) {
            return (this.set);
        }
        else {
            return null;
        }
    }
}
exports.ParseContext = ParseContext;
//# sourceMappingURL=parse-context.js.map