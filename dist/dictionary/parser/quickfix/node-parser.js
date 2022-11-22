"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeParser = void 0;
const contained_1 = require("../../contained");
const definition_1 = require("../../definition");
const parse_context_1 = require("./parse-context");
class NodeParser {
    constructor(definitions, passes) {
        this.definitions = definitions;
        this.passes = passes;
        this.parseContexts = [];
    }
    addSimple(node) {
        if (node.isSelfClosing) {
            const parent = this.peek();
            if (parent == null) {
                throw new Error(`simple field ${node.name} has no parent on which to add.`);
            }
            const fieldName = node.attributes.name;
            const fieldDefinition = this.definitions.simple.get(fieldName);
            if (fieldDefinition == null) {
                throw new Error(`simple field ${fieldName} has no declaration in dictionary.`);
            }
            const containedField = new contained_1.ContainedSimpleField(fieldDefinition, parent.set.fields.length, node.attributes.required === 'Y', false);
            parent.set.add(containedField);
        }
    }
    addComponentField(componentName, node) {
        const parent = this.peek();
        if (parent == null) {
            throw new Error(`component ${node.name} has no parent on which to add.`);
        }
        const fieldDef = this.definitions.component.get(componentName);
        if (fieldDef != null) {
            const containedField = new contained_1.ContainedComponentField(fieldDef, parent.set.fields.length, parent.required);
            parent.set.add(containedField);
        }
        else {
            if (this.passes >= 4) {
                throw new Error(`field ${node.name} includes unknown component ${componentName}.`);
            }
        }
    }
    addGroupField(name) {
        const group = this.parseContexts.pop();
        if (group == null) {
            throw new Error(`group field ${name} closes yet does not exist.`);
        }
        const parent = this.peek();
        if (parent != null) {
            const asGroup = group.asGroup();
            const containedField = new contained_1.ContainedGroupField(asGroup, parent.set.fields.length, group.required);
            parent.set.add(containedField);
        }
        else {
            throw new Error(`group field ${group.name} has no parent on which to add.`);
        }
    }
    beginGroupDefinition(node) {
        if (!node.isSelfClosing) {
            const groupName = node.attributes.name;
            const noOfField = this.definitions.simple.get(groupName);
            if (noOfField == null) {
                const msg = `group ${groupName} has no field defined.`;
                throw new Error(msg);
            }
            const set = new definition_1.GroupFieldDefinition(groupName, groupName, null, noOfField, null);
            const context = new parse_context_1.ParseContext(node.attributes.name, true, set);
            context.required = node.attributes.required === 'Y';
            this.parseContexts.push(context);
        }
    }
    peek() {
        return this.parseContexts.length > 0 ? this.parseContexts[this.parseContexts.length - 1] : null;
    }
}
exports.NodeParser = NodeParser;
//# sourceMappingURL=node-parser.js.map