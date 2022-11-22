"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsciiSegmentParser = void 0;
const segment_description_1 = require("../segment/segment-description");
const structure_1 = require("../structure");
const definition_1 = require("../../dictionary/definition");
const contained_1 = require("../../dictionary/contained");
const tsyringe_1 = require("tsyringe");
const di_tokens_1 = require("../../runtime/di-tokens");
const segment_type_1 = require("../segment/segment-type");
let AsciiSegmentParser = class AsciiSegmentParser {
    constructor(definitions) {
        this.definitions = definitions;
    }
    parse(msgType, tags, last) {
        const segments = [];
        const msgDefinition = this.definitions.message.get(msgType);
        if (!msgDefinition) {
            return null;
        }
        const structureStack = [];
        let currentTagPosition = 0;
        let peek;
        function unwind(tag) {
            while (structureStack.length > 1) {
                const done = structureStack.pop();
                done.end(segments.length, currentTagPosition - 1, tags.tagPos[currentTagPosition - 1].tag);
                segments.push(done);
                peek = structureStack[structureStack.length - 1];
                if (peek.set.containedTag[tag]) {
                    break;
                }
                if (peek.type === segment_type_1.SegmentType.Msg) {
                    break;
                }
            }
        }
        function examine(tag) {
            let structure = null;
            switch (peek.currentField.type) {
                case contained_1.ContainedFieldType.Simple: {
                    const sf = peek.currentField;
                    if (sf.definition.tag === tag) {
                        currentTagPosition = currentTagPosition + 1;
                    }
                    break;
                }
                case contained_1.ContainedFieldType.Component: {
                    const cf = peek.currentField;
                    structure = new segment_description_1.SegmentDescription(cf.name, tag, cf.definition, currentTagPosition, structureStack.length, segment_type_1.SegmentType.Component);
                    break;
                }
                case contained_1.ContainedFieldType.Group: {
                    const gf = peek.currentField;
                    structure = new segment_description_1.SegmentDescription(gf.name, tag, gf.definition, currentTagPosition, structureStack.length, segment_type_1.SegmentType.Group);
                    currentTagPosition = currentTagPosition + 1;
                    structure.startGroup(tags.tagPos[currentTagPosition].tag);
                    break;
                }
                default:
                    throw new Error(`unknown tag type ${tag}`);
            }
            return structure;
        }
        function groupDelimiter(tag) {
            let delimiter = false;
            if (tag === peek.delimiterTag) {
                peek.addDelimiterPosition(currentTagPosition);
            }
            else if (structureStack.length > 1) {
                delimiter = structureStack[structureStack.length - 2].groupAddDelimiter(tag, currentTagPosition);
            }
            return delimiter;
        }
        function gap(tag) {
            const gap = new segment_description_1.SegmentDescription('.undefined', tag, peek.set, currentTagPosition, structureStack.length, segment_type_1.SegmentType.Gap);
            gap.end(segments.length, currentTagPosition, tag);
            segments.push(gap);
            currentTagPosition++;
        }
        function discover() {
            while (currentTagPosition <= last) {
                const tag = tags.tagPos[currentTagPosition].tag;
                peek = structureStack[structureStack.length - 1];
                peek.setCurrentField(tag);
                if (!peek.set.containedTag[tag] || groupDelimiter(tag)) {
                    const unknown = peek.type === segment_type_1.SegmentType.Msg;
                    if (unknown) {
                        gap(tag);
                    }
                    else if (structureStack.length > 1) {
                        unwind(tag);
                    }
                    continue;
                }
                const structure = examine(tag);
                if (structure) {
                    structureStack.push(structure);
                }
            }
        }
        function clean() {
            while (structureStack.length > 0) {
                const done = structureStack.pop();
                done.end(segments.length, currentTagPosition - 1, tags.tagPos[currentTagPosition - 1].tag);
                segments[segments.length] = done;
            }
            const m1 = segments.length - 1;
            const m2 = segments.length - 2;
            const tmp = segments[m1];
            segments[m1] = segments[m2];
            segments[m2] = tmp;
        }
        const msgStructure = new segment_description_1.SegmentDescription(msgDefinition.name, tags.tagPos[0].tag, msgDefinition, currentTagPosition, structureStack.length, segment_type_1.SegmentType.Msg);
        structureStack.push(msgStructure);
        discover();
        clean();
        return new structure_1.Structure(tags, segments);
    }
};
AsciiSegmentParser = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(di_tokens_1.DITokens.Definitions)),
    __metadata("design:paramtypes", [definition_1.FixDefinitions])
], AsciiSegmentParser);
exports.AsciiSegmentParser = AsciiSegmentParser;
//# sourceMappingURL=ascii-segment-parser.js.map