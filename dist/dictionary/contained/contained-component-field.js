"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainedComponentField = void 0;
const contained_field_1 = require("./contained-field");
const contained_field_type_1 = require("./contained-field-type");
class ContainedComponentField extends contained_field_1.ContainedField {
    constructor(definition, position, required, override) {
        super(override || definition.name, position, contained_field_type_1.ContainedFieldType.Component, required);
        this.definition = definition;
        this.position = position;
        this.required = required;
        this.override = override;
    }
    toString() {
        return `[${this.position}]=C.${this.definition.fields.length} (${this.name})`;
    }
}
exports.ContainedComponentField = ContainedComponentField;
//# sourceMappingURL=contained-component-field.js.map