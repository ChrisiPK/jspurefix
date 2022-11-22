"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentFieldDefinition = void 0;
const contained_1 = require("../contained");
const contained_set_type_1 = require("../contained-set-type");
class ComponentFieldDefinition extends contained_1.ContainedFieldSet {
    constructor(name, abbreviation, category, description) {
        super(contained_set_type_1.ContainedSetType.Component, name, abbreviation, category, description);
        this.name = name;
        this.abbreviation = abbreviation;
        this.category = category;
        this.description = description;
    }
    getPrefix() {
        return `C`;
    }
}
exports.ComponentFieldDefinition = ComponentFieldDefinition;
//# sourceMappingURL=component-field-definition.js.map