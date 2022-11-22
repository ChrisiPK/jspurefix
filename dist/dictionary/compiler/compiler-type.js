"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompilerType = void 0;
const contained_1 = require("../contained");
const _ = require("lodash");
const contained_set_type_1 = require("../contained-set-type");
const fix_definition_source_1 = require("../fix-definition-source");
class CompilerType {
    constructor(definitions, set, qualifiedName) {
        this.definitions = definitions;
        this.set = set;
        this.qualifiedName = qualifiedName;
        const snake = _.snakeCase(this.qualifiedName);
        if (set.type === contained_set_type_1.ContainedSetType.Msg) {
            this.snaked = `./${snake}`;
        }
        else {
            this.snaked = `./set/${snake}`;
        }
    }
    getExtended(field) {
        switch (field.type) {
            case contained_1.ContainedFieldType.Group: {
                const gf = field;
                switch (this.definitions.source) {
                    case fix_definition_source_1.FixDefinitionSource.QuickFix: {
                        return this.qualifiedName + field.name;
                    }
                    case fix_definition_source_1.FixDefinitionSource.FixmlRepo: {
                        return gf.definition.name;
                    }
                    default: {
                        return field.name;
                    }
                }
            }
            case contained_1.ContainedFieldType.Component: {
                const cf = field;
                switch (this.definitions.source) {
                    case fix_definition_source_1.FixDefinitionSource.FixmlRepo: {
                        return cf.definition.name;
                    }
                    default: {
                        return field.name;
                    }
                }
            }
            default:
                return field.name;
        }
    }
    getFieldGroupName(field) {
        switch (field.type) {
            case contained_1.ContainedFieldType.Group: {
                const gf = field;
                switch (this.definitions.source) {
                    case fix_definition_source_1.FixDefinitionSource.FixmlRepo: {
                        return gf.definition.name;
                    }
                    default: {
                        return field.name;
                    }
                }
            }
            default:
                return field.name;
        }
    }
}
exports.CompilerType = CompilerType;
//# sourceMappingURL=compiler-type.js.map