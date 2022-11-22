"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldsParser = void 0;
const collections_1 = require("../../../collections");
const definition_1 = require("../../definition");
const xsd_parser_1 = require("./xsd-parser");
class FieldsParser extends xsd_parser_1.XsdParser {
    constructor(definitions) {
        super(definitions);
        this.definitions = definitions;
        this.alias = [];
    }
    value(line, n, v) {
        const current = this.current;
        switch (n) {
            case 'fm:EnumDoc': {
                current.enums.add(current.currentEnum, v);
                break;
            }
            case 'xs:documentation': {
                this.current['documentation'] = v;
                break;
            }
        }
    }
    close(line, node) {
        const current = this.current;
        switch (node) {
            case 'xs:simpleType': {
                this.data[this.data.length] = current;
                break;
            }
            case 'xs:schema': {
                this.insertFields();
                break;
            }
        }
    }
    open(line, node) {
        switch (node.name) {
            case 'xs:simpleType': {
                this.current = {
                    simpleTypeName: node.attributes['name']
                };
                break;
            }
            case 'fm:Xref': {
                this.assign(node);
                break;
            }
            case 'xs:restriction': {
                this.current.restrictionBase = node.attributes['base'];
                break;
            }
            case 'fm:EnumDoc': {
                if (!this.current.enums) {
                    this.current.enums = new collections_1.Dictionary();
                }
                this.current.currentEnum = node.attributes['value'];
                this.pending = node.name;
                break;
            }
            default:
                this.pending = node.name;
        }
    }
    insertFields() {
        const alias = this.alias;
        this.data.forEach((f) => {
            const sf = new definition_1.SimpleFieldDefinition(f.Tag, f.name, f.AbbrName, f.Category, f.CategoryAbbrName, f.Type, f.documentation);
            if (f.enums) {
                f.enums.forEach((k, v) => {
                    sf.addEnum(k, v);
                });
            }
            if (f.name && f.Type && f.Tag) {
                this.definitions.addSimpleFieldDef(sf, f.simpleTypeName);
            }
            else if (f.restrictionBase && f.simpleTypeName) {
                let mapped = f.simpleTypeName;
                if (mapped.endsWith('_t')) {
                    mapped = mapped.replace(/_t$/, '');
                }
                else {
                    mapped = f.restrictionBase;
                }
                alias.push({
                    name: f.simpleTypeName,
                    mapped: mapped
                });
            }
        });
        alias.forEach((a) => {
            this.definitions.addSimpleAlias(a.mapped, a.name);
        });
    }
}
exports.FieldsParser = FieldsParser;
//# sourceMappingURL=fields-parser.js.map