"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispatchContainedField = void 0;
const contained_field_type_1 = require("./contained-field-type");
function dispatchContainedField(field, dispatcher) {
    switch (field.type) {
        case contained_field_type_1.ContainedFieldType.Group: {
            if (dispatcher.group) {
                dispatcher.group(field);
            }
            break;
        }
        case contained_field_type_1.ContainedFieldType.Simple: {
            if (dispatcher.simple) {
                dispatcher.simple(field);
            }
            break;
        }
        case contained_field_type_1.ContainedFieldType.Component: {
            if (dispatcher.component) {
                dispatcher.component(field);
            }
            break;
        }
        default:
            throw new Error(`unknown type ${field.type}`);
    }
}
exports.dispatchContainedField = dispatchContainedField;
//# sourceMappingURL=contained-field-dispatch.js.map