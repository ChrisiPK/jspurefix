"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainedGroupField = void 0;
const contained_field_1 = require("./contained-field");
const contained_field_type_1 = require("./contained-field-type");
class ContainedGroupField extends contained_field_1.ContainedField {
    constructor(definition, position, required, override) {
        super(override || definition.name, position, contained_field_type_1.ContainedFieldType.Group, required);
        this.definition = definition;
        this.position = position;
        this.required = required;
        this.override = override;
    }
    toString() {
        const definition = this.definition;
        if (!definition) {
            return '';
        }
        const tag = definition.noOfField ? definition.noOfField.tag : -1;
        return `[${this.position}]=G.${this.definition.fields.length}(0=${tag})(${this.name})`;
    }
}
exports.ContainedGroupField = ContainedGroupField;
//# sourceMappingURL=contained-group-field.js.map