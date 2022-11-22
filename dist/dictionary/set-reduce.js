"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetReduce = void 0;
const contained_1 = require("./contained");
class SetReduce {
    reduceField(a, field, dispatcher) {
        switch (field.type) {
            case contained_1.ContainedFieldType.Group: {
                if (dispatcher.group) {
                    dispatcher.group(a, field);
                }
                break;
            }
            case contained_1.ContainedFieldType.Simple: {
                if (dispatcher.simple) {
                    dispatcher.simple(a, field);
                }
                break;
            }
            case contained_1.ContainedFieldType.Component: {
                if (dispatcher.component) {
                    dispatcher.component(a, field);
                }
                break;
            }
            default:
                throw new Error(`unknown type ${field.type}`);
        }
    }
    reduce(def, dispatcher, init) {
        return def.fields.reduce((a, field) => {
            this.reduceField(a, field, dispatcher);
            return a;
        }, init);
    }
}
exports.SetReduce = SetReduce;
//# sourceMappingURL=set-reduce.js.map