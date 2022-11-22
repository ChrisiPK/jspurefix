"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainedSimpleField = void 0;
const contained_field_1 = require("./contained-field");
const contained_field_type_1 = require("./contained-field-type");
class ContainedSimpleField extends contained_field_1.ContainedField {
    constructor(definition, position, required, attribute, override) {
        super(override || definition.name, position, contained_field_type_1.ContainedFieldType.Simple, required);
        this.definition = definition;
        this.position = position;
        this.required = required;
        this.attribute = attribute;
        this.override = override;
    }
    toString() {
        return `[${this.position}]=S.${this.definition.tag} (${this.name})`;
    }
}
exports.ContainedSimpleField = ContainedSimpleField;
//# sourceMappingURL=contained-simple-field.js.map