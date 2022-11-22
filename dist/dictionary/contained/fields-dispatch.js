"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldsDispatch = void 0;
const contained_field_type_1 = require("./contained-field-type");
class FieldsDispatch {
    dispatchField(field, dispatcher) {
        switch (field.type) {
            case contained_field_type_1.ContainedFieldType.Group: {
                if (dispatcher.group) {
                    dispatcher.group(field);
                }
                break;
            }
            case contained_field_type_1.ContainedFieldType.Simple: {
                if (dispatcher.simple) {
                    try {
                        dispatcher.simple(field);
                    }
                    catch (ex) {
                        let x = 0;
                    }
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
    dispatchFields(fields, dispatcher) {
        fields.forEach((field) => {
            this.dispatchField(field, dispatcher);
        });
    }
}
exports.FieldsDispatch = FieldsDispatch;
//# sourceMappingURL=fields-dispatch.js.map