"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgView = void 0;
const tag_pos_1 = require("./tag/tag-pos");
const dictionary_1 = require("../dictionary");
const elastic_buffer_1 = require("./elastic-buffer");
const contained_set_type_1 = require("../dictionary/contained-set-type");
class MsgView {
    constructor(segment, structure) {
        this.segment = segment;
        this.structure = structure;
    }
    static asVerbose(field, val, i, count, tp) {
        const newLine = require('os').EOL;
        let desc;
        let name;
        if (field) {
            name = field.name || 'unknown';
            if (field.isEnum()) {
                desc = `${val}[${field.resolveEnum(val)}]${newLine}\t${field.description || ''}${newLine}${newLine}`;
            }
            else {
                desc = `${val}${newLine}t${field.description || ''}${newLine}${newLine}`;
            }
        }
        else {
            name = 'unknown';
        }
        return `[${i}] ${tp.tag} (${name}) = ${desc}`;
    }
    static asToken(field, val, i, count, tp) {
        const perLine = 2;
        const newLine = require('os').EOL;
        let desc;
        let name;
        if (field) {
            name = field.name || 'unknown';
            if (field.isEnum()) {
                desc = `${val}[${field.resolveEnum(val)}]`;
            }
            else {
                desc = `${val}`;
            }
        }
        else {
            desc = `${val}`;
            name = 'unknown';
        }
        let delimiter;
        if (i === 1 || (i < count && i % perLine - 1 === 0)) {
            delimiter = newLine;
        }
        else {
            delimiter = i < count ? ', ' : '';
        }
        return `[${i}] ${tp.tag} (${name}) = ${desc}${delimiter}`;
    }
    invalid() {
        const invalidTags = [];
        const set = this.segment.set;
        const tags = this.structure.tags;
        for (let i = 0; i < tags.nextTagPos; ++i) {
            const tag = tags.tagPos[i].tag;
            if (tag <= 0 || !set.containedTag[tag]) {
                invalidTags[invalidTags.length] = tag;
            }
        }
        return invalidTags;
    }
    missing() {
        return this.missingRequired(this.segment.set, []);
    }
    contains(tagOrName) {
        const tag = this.resolveTag(tagOrName);
        const position = this.getPosition(tag);
        return position >= 0;
    }
    getGroupInstance(i) {
        const instance = this.segment.getInstance(i);
        if (!instance) {
            return null;
        }
        return this.create(instance);
    }
    getUndefined() {
        return this.structure.layout['.undefined'];
    }
    undefinedForMsg() {
        let msg = null;
        const undefinedTags = this.getUndefined();
        if (undefinedTags) {
            if (Array.isArray(undefinedTags)) {
                msg = `undefined tags = ` + undefinedTags.map((e) => e.startTag.toString()).join(', ');
            }
            else {
                msg = `undefined tag = ${undefinedTags.startTag}`;
            }
        }
        return msg;
    }
    groupCount() {
        const positions = this.segment.delimiterPositions;
        return positions ? positions.length : 0;
    }
    getString(tagOrName) {
        const tag = this.resolveTag(tagOrName);
        if (tag == null) {
            return null;
        }
        const position = this.getPosition(tag);
        if (position < 0) {
            return null;
        }
        return this.stringAtPosition(position);
    }
    getStrings(tagOrName = -1) {
        if (tagOrName < 0) {
            return this.allStrings();
        }
        const tag = this.resolveTag(tagOrName);
        if (tag == null) {
            return null;
        }
        const positions = this.getPositions(tag);
        if (positions == null) {
            return null;
        }
        return positions.map((position) => {
            return this.stringAtPosition(position);
        });
    }
    getTyped(tagOrName) {
        const tag = this.resolveTag(tagOrName);
        if (tag == null) {
            return null;
        }
        const field = this.structure.tags.definitions.tagToSimple[tag];
        if (field == null) {
            return null;
        }
        return this.toTyped(field);
    }
    getTypedTags(tagOrName) {
        return tagOrName.map((s) => this.getTyped(s));
    }
    toObject() {
        const segment = this.segment;
        if (segment.delimiterTag) {
            switch (segment.set.type) {
                case contained_set_type_1.ContainedSetType.Group: {
                    return this.asInstances(segment.set.name);
                }
                case contained_set_type_1.ContainedSetType.Msg: {
                    const hdrView = this.getView('Hdr');
                    const batch = {};
                    if (hdrView) {
                        batch[hdrView.segment.set.name] = hdrView.toObject();
                    }
                    batch[segment.name] = this.asInstances(segment.name);
                    return batch;
                }
            }
        }
        return this.asLoose(segment.set);
    }
    toString() {
        return this.stringify(MsgView.asToken);
    }
    toVerbose() {
        return this.stringify(MsgView.asVerbose);
    }
    toJson() {
        return JSON.stringify(this.toObject(), null, 4);
    }
    getView(name) {
        const parts = name.split('.');
        return parts.reduce((a, current) => {
            if (!a) {
                return a;
            }
            const structure = a.structure;
            const singleton = structure.firstContainedWithin(current, a.segment);
            if (singleton) {
                return a.create(singleton);
            }
            const component = a.segment.set.localNameToField.get(current);
            if (component) {
                const abbreviated = structure.firstContainedWithin(component.name, a.segment);
                if (abbreviated) {
                    return a.create(abbreviated);
                }
            }
            return null;
        }, this);
    }
    resolveTag(tagOrName) {
        let tag;
        if (typeof (tagOrName) === 'string') {
            let cf = this.segment.set.simple.get(tagOrName);
            const f = cf ? cf.definition : this.structure.tags.definitions.simple.get(tagOrName);
            if (f == null) {
                return null;
            }
            tag = f.tag;
        }
        else {
            tag = tagOrName;
        }
        return tag;
    }
    getPositions(tag) {
        const forwards = this.sortedTagPosForwards;
        const backwards = this.sortedTagPosBackwards;
        const position = this.binarySearch(tag);
        if (position < 0) {
            return null;
        }
        const count = forwards.length;
        const last = count - 1;
        let end = position;
        while (end <= last) {
            if (tag !== forwards[end].tag) {
                break;
            }
            ++end;
        }
        let start = last - position;
        while (start <= last) {
            if (tag !== backwards[start].tag) {
                break;
            }
            ++start;
        }
        const begin = last - (start - 1);
        const len = end - begin;
        const positions = new Array(len);
        for (let i = begin; i < end; ++i) {
            positions[i - begin] = forwards[i].position;
        }
        return positions;
    }
    getPosition(tag) {
        const pos = this.binarySearch(tag);
        if (pos >= 0) {
            return this.sortedTagPosForwards[pos].position;
        }
        else {
            return -1;
        }
    }
    allStrings() {
        const segment = this.segment;
        const range = [];
        for (let i = segment.startPosition; i <= segment.endPosition; ++i) {
            range[range.length] = i;
        }
        return range.map((i) => this.stringAtPosition(i));
    }
    asInstances(name) {
        const groupView = this.getView(name);
        if (groupView == null) {
            return;
        }
        const groupArray = new Array(groupView.groupCount());
        const count = groupView.groupCount();
        for (let j = 0; j < count; ++j) {
            const instance = groupView.getGroupInstance(j);
            groupArray[j] = instance.toObject();
        }
        return groupArray;
    }
    asLoose(def) {
        const reducer = new dictionary_1.SetReduce();
        return reducer.reduce(def, {
            group: (a, field) => this.asLooseGroup(a, field),
            simple: (a, field) => this.asLooseSimple(a, field),
            component: (a, field) => this.asLooseComponent(a, field)
        }, def.localAttribute.reduce((a, sf) => {
            const def = sf.definition;
            const position = this.getPosition(def.tag);
            if (position >= 0) {
                a[def.name] = this.toTyped(def);
            }
            return a;
        }, {}));
    }
    missingRequired(def, tags) {
        const reducer = new dictionary_1.SetReduce();
        return reducer.reduce(def, {
            group: (a, field) => this.missingGroup(def, field, a),
            simple: (a, field) => this.missingSimple(field, a),
            component: (a, field) => this.missingComponent(field, a)
        }, tags);
    }
    missingSimple(sf, a) {
        if (sf.required && this.getPosition(sf.definition.tag) < 0) {
            a.push(sf.definition.tag);
        }
    }
    missingComponent(cf, a) {
        const view = this.getView(cf.name);
        if (view) {
            view.missingRequired(cf.definition, a);
        }
    }
    missingGroup(def, gf, tags) {
        const name = gf.definition.noOfField ? gf.definition.noOfField.name : def.name;
        const groupView = this.getView(name) || this.getView(gf.definition.name);
        if (groupView == null) {
            return;
        }
        const count = groupView.groupCount();
        for (let j = 0; j < count; ++j) {
            const instance = groupView.getGroupInstance(j);
            instance.missingRequired(gf.definition, tags);
        }
    }
    asLooseComponent(a, cf) {
        const view = this.getView(cf.name);
        if (view) {
            const component = view.toObject();
            if (component) {
                a[cf.definition.name] = component;
            }
        }
    }
    asLooseSimple(a, sf) {
        const def = sf.definition;
        const position = this.getPosition(def.tag);
        if (position >= 0) {
            const asSimple = this.toTyped(def);
            if (asSimple != null) {
                a[sf.name] = asSimple;
            }
        }
    }
    asLooseGroup(a, gf) {
        const def = gf.definition;
        const name = def.noOfField ? def.noOfField.name : def.name;
        const instances = this.asInstances(name) || this.asInstances(def.name);
        if (instances) {
            a[def.name] = instances;
        }
    }
    binarySearch(tag) {
        let forwards = this.sortedTagPosForwards;
        if (!forwards) {
            const segment = this.segment;
            forwards = this.sortedTagPosForwards = this.structure.tags.tagPos.slice(segment.startPosition, segment.endPosition + 1);
            forwards.sort(tag_pos_1.TagPos.compare);
            this.sortedTagPosBackwards = forwards.slice().reverse();
        }
        return tag_pos_1.TagPos.binarySearch(forwards, tag);
    }
    stringify(getToken) {
        const structure = this.structure;
        const buffer = new elastic_buffer_1.ElasticBuffer();
        const segment = this.segment;
        const tags = structure.tags;
        const count = segment.endPosition - segment.startPosition;
        const simple = tags.definitions.simple;
        for (let i = segment.startPosition; i <= segment.endPosition; ++i) {
            const tagPos = tags.tagPos[i];
            const field = simple.get(tagPos.tag.toString());
            const val = this.stringAtPosition(i);
            const token = getToken(field, val, i - segment.startPosition, count, tagPos);
            buffer.writeString(token);
        }
        return buffer.toString();
    }
}
exports.MsgView = MsgView;
//# sourceMappingURL=msg-view.js.map