"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixDefinitions = void 0;
const collections_1 = require("../../collections");
const category_simple_set_1 = require("./category-simple-set");
class FixDefinitions {
    constructor(source, version) {
        this.source = source;
        this.version = version;
        this.simple = new collections_1.Dictionary();
        this.component = new collections_1.Dictionary();
        this.message = new collections_1.Dictionary();
        this.tagToSimple = {};
        this.categorySimple = new collections_1.Dictionary();
    }
    containedSet(type) {
        return this.message.get(type) || this.component.get(type);
    }
    addMessage(message) {
        const messages = this.message;
        messages.addUpdate(message.name, message);
        if (message.msgType && message.msgType !== message.name) {
            messages.addUpdate(message.msgType, message);
        }
        if (message.abbreviation) {
            if (message.abbreviation !== message.name) {
                messages.addUpdate(message.abbreviation, message);
            }
        }
    }
    addComponentFieldDef(field) {
        this.component.addUpdate(field.name, field);
    }
    getSimple(name, cat) {
        let sf = null;
        if (cat) {
            let category = this.categorySimple.get(cat);
            if (category) {
                sf = category.simple.get(name);
            }
        }
        if (!sf) {
            sf = this.simple.get(name);
        }
        return sf;
    }
    addSimpleAlias(from, to) {
        const simple = this.simple.get(from);
        if (simple) {
            this.simple.addUpdate(to, simple);
        }
    }
    addSimpleFieldDef(field, typeName = null) {
        this.assignCategory(field);
        const simple = this.simple;
        simple.addUpdate(field.num, field);
        simple.addUpdate(field.name, field);
        this.tagToSimple[field.tag] = field;
        if (field.abbreviation && field.abbreviation !== field.name) {
            if (!simple.containsKey(field.abbreviation)) {
                simple.addUpdate(field.abbreviation, field);
            }
        }
        if (typeName && typeName !== field.name && field.name && field.type) {
            simple.addUpdate(typeName, field);
        }
    }
    assignCategory(field) {
        if (field.baseCategory && field.baseCategoryAbbreviation) {
            let category = this.categorySimple.get(field.baseCategory);
            if (!category) {
                category = new category_simple_set_1.CategorySimpleSet(field.baseCategory);
                this.categorySimple.add(field.baseCategory, category);
            }
            category.simple.addUpdate(field.baseCategoryAbbreviation, field);
        }
    }
}
exports.FixDefinitions = FixDefinitions;
//# sourceMappingURL=fix-definitions.js.map