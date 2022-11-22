"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleFieldDefinition = void 0;
const collections_1 = require("../../collections");
const field_enum_1 = require("../field-enum");
const tags_1 = require("../../buffer/tag/tags");
const ascii_chars_1 = require("../../buffer/ascii/ascii-chars");
const _ = require("lodash");
class SimpleFieldDefinition {
    constructor(num, name, abbreviation, baseCategory, baseCategoryAbbreviation, type, description) {
        this.num = num;
        this.name = name;
        this.abbreviation = abbreviation;
        this.baseCategory = baseCategory;
        this.baseCategoryAbbreviation = baseCategoryAbbreviation;
        this.type = type;
        this.description = description;
        this.tag = parseInt(num, 10);
        this.tagType = tags_1.Tags.toType(type);
    }
    isEnum() {
        return this.enums != null;
    }
    containsEnum(key) {
        const enums = this.enums;
        if (!enums) {
            return false;
        }
        return enums.get(key) != null;
    }
    resolveEnum(key) {
        const enums = this.enums;
        if (!enums) {
            return key;
        }
        const e = enums.get(key);
        if (e) {
            return e.val;
        }
        return key;
    }
    patchEnumValue(v) {
        let converted = _.upperFirst(_.camelCase(v));
        const charAtPos = converted.charCodeAt(0);
        const zero = ascii_chars_1.AsciiChars.Zero;
        const nine = ascii_chars_1.AsciiChars.Nine;
        const atDigit = charAtPos >= zero && charAtPos <= nine;
        if (atDigit) {
            converted = `E${converted}`;
        }
        if (this.enumVals.containsKey(converted)) {
            converted = `${converted}2`;
        }
        return converted;
    }
    addEnum(key, val, description) {
        let enums = this.enums;
        let enumVals = this.enumVals;
        if (enums == null) {
            this.enums = enums = new collections_1.Dictionary();
            this.enumVals = enumVals = new collections_1.Dictionary();
        }
        val = this.patchEnumValue(val);
        enums.add(key, new field_enum_1.FieldEnum(key, val, description));
        enumVals.add(val, true);
    }
    toString() {
        let abbreviation = '';
        if (this.abbreviation && this.name !== this.abbreviation) {
            abbreviation = `(${this.abbreviation})`;
        }
        let baseCategoryAbbreviation = '';
        if (this.baseCategoryAbbreviation && this.baseCategoryAbbreviation !== this.name) {
            baseCategoryAbbreviation = this.baseCategoryAbbreviation;
        }
        if (baseCategoryAbbreviation.length > 0 && this.baseCategory) {
            baseCategoryAbbreviation = `${this.baseCategory} ${baseCategoryAbbreviation}`;
        }
        return `${this.num} ${this.name} ${abbreviation} ${baseCategoryAbbreviation} ${this.type} ${this.description || ''} ${this.enums ? `enumerated = [ ${this.enums.toString()} ]` : ''}`;
    }
}
exports.SimpleFieldDefinition = SimpleFieldDefinition;
//# sourceMappingURL=simple-field-definition.js.map