"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainedFieldSet = void 0;
const collections_1 = require("../../collections");
const elastic_buffer_1 = require("../../buffer/elastic-buffer");
const contained_field_type_1 = require("./contained-field-type");
const tag_type_1 = require("../../buffer/tag/tag-type");
class ContainedFieldSet {
    constructor(type, name, category, abbreviation, description) {
        this.type = type;
        this.name = name;
        this.category = category;
        this.abbreviation = abbreviation;
        this.description = description;
        this.groups = new collections_1.Dictionary();
        this.components = new collections_1.Dictionary();
        this.simple = new collections_1.Dictionary();
        this.fields = [];
        this.containedTag = {};
        this.flattenedTag = [];
        this.containedLength = {};
        this.localTag = {};
        this.localRequired = {};
        this.tagToSimple = {};
        this.tagToField = {};
        this.localNameToField = new collections_1.Dictionary();
        this.nameToLocalAttribute = new collections_1.Dictionary();
        this.localAttribute = [];
        this.containsRaw = false;
    }
    toString() {
        const buffer = new elastic_buffer_1.ElasticBuffer(2 * 1024);
        const fields = this.fields;
        buffer.writeString(`Set: ${this.name}(${this.getPrefix()}) fields [${fields.length}]: `);
        const set = fields.map(f => f.toString());
        const s = set.join(', ');
        buffer.writeString(s);
        return buffer.toString();
    }
    getFieldName(tag) {
        const s = this.tagToSimple[tag];
        if (s == null) {
            const gf = this.tagToField[tag];
            if (gf !== null) {
                return `${gf.definition.name}`;
            }
            return `${tag}`;
        }
        return s.name;
    }
    add(field) {
        this.fields.push(field);
        this.localNameToField.addUpdate(field.name, field);
        this.addUpdate(field);
        this.addContained(this, field);
    }
    addUpdate(field) {
        switch (field.type) {
            case contained_field_type_1.ContainedFieldType.Simple: {
                this.addLocalSimple(field);
                break;
            }
            case contained_field_type_1.ContainedFieldType.Component: {
                const cf = field;
                const definition = cf.definition;
                if (definition.abbreviation && definition.abbreviation !== field.name) {
                    this.localNameToField.addUpdate(definition.abbreviation, field);
                }
                break;
            }
            case contained_field_type_1.ContainedFieldType.Group: {
                const gf = field;
                const definition = gf.definition;
                if (definition.abbreviation && definition.abbreviation !== field.name) {
                    this.localNameToField.addUpdate(definition.abbreviation, field);
                }
                break;
            }
            default:
                throw new Error(`unknown field type ${field.type}`);
        }
    }
    addLocalSimple(field) {
        const definition = field.definition;
        if (definition.abbreviation && definition.abbreviation !== definition.name) {
            this.localNameToField.addUpdate(definition.abbreviation, field);
        }
        if (definition.baseCategoryAbbreviation && definition.baseCategory === this.category) {
            this.localNameToField.addUpdate(definition.baseCategoryAbbreviation, field);
        }
        if (field.attribute) {
            this.nameToLocalAttribute.addUpdate(definition.abbreviation, field);
            this.localAttribute.push(field);
            this.fields.pop();
        }
        const tag = definition.tag;
        this.localTag[tag] = field;
        if (field.required) {
            this.localRequired[tag] = field;
        }
    }
    addContained(parent, field) {
        switch (field.type) {
            case contained_field_type_1.ContainedFieldType.Group: {
                this.addGroupFieldDef(field);
                break;
            }
            case contained_field_type_1.ContainedFieldType.Component: {
                this.addComponentFieldDef(field);
                break;
            }
            case contained_field_type_1.ContainedFieldType.Simple: {
                this.addSimpleFieldDef(parent, field);
                break;
            }
            default:
                throw new Error(`unknown field type ${field.type}`);
        }
    }
    addAllFields(containedField) {
        containedField.fields.forEach((f) => {
            this.addContained(containedField, f);
        });
    }
    addGroupFieldDef(groupField) {
        if (this.groups.containsKey(groupField.name)) {
            return;
        }
        const definition = groupField.definition;
        this.groups.add(groupField.name, groupField);
        const nof = definition.noOfField;
        if (nof) {
            const tag = nof.tag;
            this.containedTag[tag] = true;
            this.flattenedTag.push(tag);
        }
        this.addAllFields(definition);
        this.mapAllBelow(definition, groupField);
    }
    addComponentFieldDef(componentField) {
        const components = this.components;
        if (components.containsKey(componentField.name)) {
            return;
        }
        const definition = componentField.definition;
        components.add(componentField.name, componentField);
        this.addAllFields(definition);
        this.mapAllBelow(definition, componentField);
    }
    keys() {
        const keys = Object.keys(this.containedTag);
        const nums = new Array(keys.length);
        for (let j = 0; j < keys.length; ++j) {
            nums[j] = parseInt(keys[j], 10);
        }
        return nums;
    }
    mapAllBelow(set, field) {
        const tagsBelow = set.keys();
        for (const t of tagsBelow) {
            this.tagToField[t] = field;
        }
    }
    addSimpleFieldDef(parent, field) {
        if (this.simple.containsKey(field.name)) {
            return;
        }
        if (!this.firstSimple) {
            this.firstSimple = field;
        }
        switch (field.definition.tagType) {
            case tag_type_1.TagType.RawData: {
                const dataLengthField = parent.fields[field.position - 1];
                if (dataLengthField && dataLengthField.definition.tagType === tag_type_1.TagType.Length) {
                    this.containedLength[dataLengthField.definition.tag] = true;
                    this.containsRaw = true;
                }
                break;
            }
            default:
                break;
        }
        const tag = field.definition.tag;
        this.simple.add(field.name, field);
        this.containedTag[tag] = true;
        this.flattenedTag.push(tag);
        this.tagToSimple[tag] = field;
    }
}
exports.ContainedFieldSet = ContainedFieldSet;
//# sourceMappingURL=contained-field-set.js.map