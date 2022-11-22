"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDefinition = void 0;
const contained_1 = require("../contained");
const contained_set_type_1 = require("../contained-set-type");
class MessageDefinition extends contained_1.ContainedFieldSet {
    constructor(name, abbreviation, msgType, category, description) {
        super(contained_set_type_1.ContainedSetType.Msg, name, category, abbreviation, description);
        this.name = name;
        this.abbreviation = abbreviation;
        this.msgType = msgType;
        this.category = category;
        this.description = description;
    }
    getPrefix() {
        return `M.${this.msgType}`;
    }
}
exports.MessageDefinition = MessageDefinition;
//# sourceMappingURL=message-definition.js.map