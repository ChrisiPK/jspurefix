"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldSetParser = void 0;
const definition_1 = require("../../definition");
const node_parser_1 = require("./node-parser");
const parse_context_1 = require("./parse-context");
class FieldSetParser extends node_parser_1.NodeParser {
    constructor(definitions, passes) {
        super(definitions, passes);
        this.passes = passes;
    }
    open(line, node) {
        switch (node.name) {
            case 'component':
            case 'header':
            case 'trailer': {
                const componentName = node.attributes.name || node.name;
                let fullName = componentName;
                if (componentName === 'header') {
                    fullName = 'StandardHeader';
                }
                else if (componentName === 'trailer') {
                    fullName = 'StandardTrailer';
                }
                if (!node.isSelfClosing) {
                    const set = new definition_1.ComponentFieldDefinition(fullName, componentName, null, null);
                    const context = new parse_context_1.ParseContext(fullName, true, set);
                    this.parseContexts.push(context);
                }
                else {
                    this.addComponentField(fullName, node);
                    const context = new parse_context_1.ParseContext(fullName, false, null);
                    this.parseContexts.push(context);
                }
                break;
            }
            case 'field': {
                this.addSimple(node);
                break;
            }
            case 'group': {
                this.beginGroupDefinition(node);
                break;
            }
        }
    }
    close(line, name) {
        switch (name) {
            case 'group': {
                this.addGroupField(name);
                break;
            }
            case 'component':
            case 'header':
            case 'trailer': {
                const latest = this.parseContexts.pop();
                if (latest == null) {
                    throw new Error(`component field ${name} closes yet does not exist.`);
                }
                if (!latest.defining) {
                    return;
                }
                const asComponent = latest.asComponent();
                if (asComponent != null) {
                    this.definitions.addComponentFieldDef(asComponent);
                }
                else {
                    throw new Error(`latest not instance of component field ${latest.name} `);
                }
                break;
            }
        }
    }
}
exports.FieldSetParser = FieldSetParser;
//# sourceMappingURL=field-set-parser.js.map