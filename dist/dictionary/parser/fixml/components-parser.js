"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsParser = void 0;
const collections_1 = require("../../../collections");
const xsd_parser_1 = require("./xsd-parser");
const definition_1 = require("../../definition");
const contained_1 = require("../../contained");
class ComponentsParser extends xsd_parser_1.XsdParser {
    constructor(definitions) {
        super(definitions);
        this.definitions = definitions;
        this.attributeGroups = new collections_1.Dictionary();
        this.groups = new collections_1.Dictionary();
        this.unboundElements = [];
        this.complexTypes = new collections_1.Dictionary();
        this.currentAttributeGroupStack = [];
    }
    static getName(group, attributeGroup, type) {
        let name;
        if (type && type.appInfo) {
            name = type.appInfo.name;
        }
        else if (group) {
            name = group.name;
        }
        else if (attributeGroup) {
            name = attributeGroup.name;
        }
        else {
            name = type.name;
        }
        return name;
    }
    value(line, n, v) {
        switch (n) {
            case 'xs:documentation': {
                if (this.currentComplexType && this.currentComplexType.annotation) {
                    this.currentComplexType.annotation.documentation = v;
                }
                break;
            }
        }
        this.pending = null;
    }
    close(line, node) {
        switch (node) {
            case 'xs:complexType': {
                if (this.currentComplexType != null) {
                    const complex = this.currentComplexType;
                    this.previousComplexType = complex;
                    this.complexTypes.addUpdate(complex.name, complex);
                    this.newComplexTypes.push(complex);
                    this.currentComplexType = null;
                }
                break;
            }
            case 'xs:group': {
                if (this.currentGroup) {
                    this.groups.addUpdate(this.currentGroup.name, this.currentGroup);
                    this.currentGroup = null;
                }
                break;
            }
            case 'xs:attributeGroup': {
                const attributeStack = this.currentAttributeGroupStack;
                if (attributeStack.length > 0) {
                    const group = attributeStack.pop();
                    this.attributeGroups.addUpdate(group.name, group);
                }
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
            case 'xs:schema': {
                this.newComplexTypes = [];
                break;
            }
            case 'xs:group': {
                this.xsGroup(node);
                break;
            }
            case 'xs:attributeGroup': {
                this.xsAttributeGroup(node);
                break;
            }
            case 'xs:element': {
                this.xsElement(node);
                break;
            }
            case 'xs:appinfo': {
                this.currentComplexType.appInfo = {};
                break;
            }
            case 'xs:attribute': {
                this.xsAttribute(node);
                break;
            }
            case 'xs:complexType': {
                const unbound = this.unboundElements;
                this.currentComplexType = {
                    name: node.attributes.name || unbound[unbound.length - 1].name
                };
                break;
            }
            case 'xs:extension': {
                const current = this.currentComplexType;
                if (current && node.attributes.base) {
                    current.extensionBase = node.attributes.base;
                }
                break;
            }
            case 'fm:Xref': {
                this.assign(node, this.currentComplexType.appInfo);
                break;
            }
            case 'xs:annotation': {
                if (this.currentComplexType) {
                    this.currentComplexType.annotation = {};
                }
                break;
            }
            case 'xs:documentation': {
                if (this.currentComplexType) {
                    this.pending = node.name;
                }
                break;
            }
        }
    }
    xsAttribute(node) {
        const attribute = {};
        this.assign(node, attribute);
        const stack = this.currentAttributeGroupStack;
        if (stack.length > 0) {
            const peek = stack[stack.length - 1];
            const groupAttributes = peek.attributes;
            groupAttributes[groupAttributes.length] = attribute;
        }
    }
    xsGroup(node) {
        if (node.attributes.name) {
            this.currentGroup = {
                name: node.attributes['name'],
                elements: []
            };
        }
        else if (node.attributes.ref) {
            if (this.currentComplexType) {
                this.currentComplexType.group = node.attributes.ref;
            }
            else if (this.currentGroup) {
                const elements = this.currentGroup.elements;
                elements[elements.length] = {
                    type: node.name,
                    name: node.attributes.ref
                };
            }
        }
    }
    xsAttributeGroup(node) {
        const attributeStack = this.currentAttributeGroupStack;
        if (node.attributes.name) {
            attributeStack.push({
                name: node.attributes.name,
                attributes: []
            });
        }
        else if (node.attributes.ref) {
            if (this.currentComplexType) {
                this.currentComplexType.attributeGroup = node.attributes.ref;
            }
            else if (attributeStack.length > 0) {
                const peek = attributeStack[attributeStack.length - 1];
                peek.attributes[peek.attributes.length] = {
                    type: node.name,
                    name: node.attributes.ref
                };
            }
        }
    }
    xsElement(node) {
        const element = {};
        this.assign(node, element);
        const currentComplex = this.currentComplexType;
        const currentGroup = this.currentGroup;
        if (!currentGroup && currentComplex) {
            if (!currentComplex.element) {
                currentComplex.element = [];
            }
            const elements = currentComplex.element;
            elements[elements.length] = element;
        }
        else if (currentGroup) {
            const elements = currentGroup.elements;
            elements[elements.length] = element;
        }
        else {
            if (element.substitutionGroup && this.previousComplexType) {
                this.previousComplexType.messageName = element.name;
            }
            else {
                this.unboundElements.push(element);
            }
        }
    }
    addElement(set, element) {
        const minOccurs = parseInt(element.minOccurs, 10);
        const isGroup = element.maxOccurs === 'unbounded';
        const isComponent = element.maxOccurs === '1' || !isGroup;
        const key = element.type || element.ref || element.name;
        const containedType = this.complexTypes.get(key);
        if (containedType) {
            if (isComponent) {
                const containedDefinition = this.getComponent(containedType);
                const containedField = new contained_1.ContainedComponentField(containedDefinition, set.fields.length, minOccurs > 0, element.name);
                set.add(containedField);
            }
            else if (isGroup) {
                const containedDefinition = this.getGroup(containedType);
                const containedField = new contained_1.ContainedGroupField(containedDefinition, set.fields.length, minOccurs > 0, element.name);
                set.add(containedField);
            }
        }
        else {
            if (key !== 'Message') {
                throw new Error(`cannot resolve component ${key} contained in ${set.name}`);
            }
        }
    }
    addElements(set, elements) {
        if (elements) {
            elements.forEach((element) => {
                switch (element.type) {
                    case 'xs:group':
                        const groupElements = this.groups.get(element.name);
                        if (groupElements) {
                            this.addElements(set, groupElements.elements);
                        }
                        else {
                            throw new Error(`unable to get xs:group ${element.name}`);
                        }
                        break;
                    default: {
                        this.addElement(set, element);
                    }
                }
            });
        }
    }
    addSimpleAttribute(set, attribute) {
        let sf = this.definitions.getSimple(attribute.type);
        if (!sf) {
            sf = this.definitions.getSimple(attribute.name, set.category);
        }
        if (sf) {
            const contained = new contained_1.ContainedSimpleField(sf, set.fields.length, attribute.use !== 'optional', true, attribute.name);
            set.add(contained);
        }
        else if (set.name !== 'FixmlAttributes') {
            throw new Error(`unable to resolve simple attribute ${attribute.name}`);
        }
    }
    addAttributes(set, attributes) {
        attributes.forEach((attribute) => {
            switch (attribute.type) {
                case 'xs:attributeGroup': {
                    const attributeGroup = this.attributeGroups.get(attribute.name);
                    if (attributeGroup) {
                        this.addAttributes(set, attributeGroup.attributes);
                    }
                    else {
                        throw new Error(`unable to get xs:attributeGroup ${attribute.name}`);
                    }
                    break;
                }
                default: {
                    this.addSimpleAttribute(set, attribute);
                }
            }
        });
    }
    getGroup(type) {
        let group = this.groups.get(type.group);
        const attributeGroup = this.attributeGroups.get(type.attributeGroup);
        const name = ComponentsParser.getName(group, attributeGroup, type);
        const category = type.appInfo != null ? type.appInfo.Category : null;
        const groupDefinition = new definition_1.GroupFieldDefinition(name, name, category, null, null);
        this.populateSet(type, groupDefinition);
        return groupDefinition;
    }
    getComponent(type) {
        const definitions = this.definitions;
        let group = this.groups.get(type.group);
        const attributeGroup = this.attributeGroups.get(type.attributeGroup);
        let name = ComponentsParser.getName(group, attributeGroup, type);
        const cached = definitions.component.get(name);
        if (cached) {
            return cached;
        }
        const category = type.appInfo != null ? type.appInfo.Category : null;
        if (type.extensionBase) {
            let base = this.complexTypes.get(type.extensionBase);
            if (base) {
                name = base.appInfo.name;
            }
        }
        const component = new definition_1.ComponentFieldDefinition(name, name, category, null);
        this.populateSet(type, component);
        definitions.component.addUpdate(component.name, component);
        definitions.component.addUpdate(type.name, component);
        return component;
    }
    getMessage(type) {
        const definitions = this.definitions;
        const messages = definitions.message;
        const name = type.appInfo.name;
        const message = new definition_1.MessageDefinition(name, type.messageName, type.appInfo.MsgID, type.appInfo.Category, type.annotation.documentation);
        const abstractMessage = definitions.component.get('Message');
        abstractMessage.fields.forEach((f) => {
            message.add(f);
        });
        this.populateSet(type, message);
        messages.addUpdate(message.name, message);
        if (type.messageName && type.messageName !== name) {
            messages.addUpdate(type.messageName, message);
        }
        return message;
    }
    getBaseAttributes(type) {
        const attributeGroups = this.attributeGroups;
        let baseGroup = null;
        if (type.extensionBase) {
            let base = this.complexTypes.get(type.extensionBase);
            if (base) {
                baseGroup = attributeGroups.get(base.attributeGroup);
            }
            return baseGroup;
        }
        return null;
    }
    populateSet(type, set) {
        const group = this.groups.get(type.group);
        const elements = group ? group.elements : type.element;
        const attributeGroups = this.attributeGroups;
        const attributeGroup = attributeGroups.get(type.attributeGroup);
        const baseGroup = this.getBaseAttributes(type);
        if (baseGroup) {
            this.addAttributes(set, baseGroup.attributes);
        }
        if (attributeGroup) {
            this.addAttributes(set, attributeGroup.attributes);
        }
        this.addElements(set, elements);
    }
    constructType(type) {
        const componentType = type.appInfo != null ? type.appInfo.ComponentType : 'Block';
        switch (componentType) {
            case 'Message': {
                const message = this.getMessage(type);
                if (!message) {
                    throw new Error(`cannot resolve ${type.name}`);
                }
                break;
            }
            case 'Block': {
                const component = this.getComponent(type);
                if (!component) {
                    throw new Error(`cannot resolve ${type.name}`);
                }
                break;
            }
            case 'ImplicitBlock':
            case 'XMLDataBlock':
            case 'BlockRepeating':
            case 'ImplicitBlockRepeating': {
                break;
            }
            default:
                throw new Error(`unknown type ${componentType}`);
        }
    }
    insertFields() {
        this.newComplexTypes.forEach((type) => {
            this.constructType(type);
        });
        this.unboundElements.forEach((e) => {
            const definitions = this.definitions;
            const component = definitions.component.get(e.type);
            if (component) {
                definitions.component.addUpdate(e.name, component);
            }
        });
    }
}
exports.ComponentsParser = ComponentsParser;
//# sourceMappingURL=components-parser.js.map