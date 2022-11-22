"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickFixXmlFileParser = void 0;
const fs = require("fs");
const definition_1 = require("../../definition");
const field_definition_parser_1 = require("./field-definition-parser");
const field_set_parser_1 = require("./field-set-parser");
const message_parser_1 = require("./message-parser");
const fix_parser_1 = require("../../fix-parser");
const util_1 = require("util");
const contained_1 = require("../../contained");
const fix_definition_source_1 = require("../../fix-definition-source");
const version_util_1 = require("../../version-util");
const parse_state_1 = require("./parse-state");
class QuickFixXmlFileParser extends fix_parser_1.FixParser {
    constructor(xmlPath, getLogger) {
        super();
        this.xmlPath = xmlPath;
        this.getLogger = getLogger;
        this.parseState = parse_state_1.ParseState.Begin;
        this.numberPasses = 0;
        this.singlePass = (0, util_1.promisify)(QuickFixXmlFileParser.subscribe);
    }
    static subscribe(instance, saxStream, done) {
        let parser;
        instance.numberPasses++;
        switch (instance.parseState) {
            case parse_state_1.ParseState.Begin: {
                instance.parseState = parse_state_1.ParseState.FieldDefinitions;
                break;
            }
            case parse_state_1.ParseState.FieldDefinitions: {
                instance.parseState = parse_state_1.ParseState.ComponentsFirstPass;
                break;
            }
            case parse_state_1.ParseState.ComponentsFirstPass: {
                instance.parseState = parse_state_1.ParseState.ComponentsSecondPass;
                break;
            }
            case parse_state_1.ParseState.ComponentsSecondPass: {
                instance.parseState = parse_state_1.ParseState.ComponentsThirdPass;
                break;
            }
            case parse_state_1.ParseState.ComponentsThirdPass: {
                instance.parseState = parse_state_1.ParseState.Messages;
                break;
            }
        }
        const saxParser = saxStream._parser;
        saxStream.on('error', (e) => {
            done(e, null);
        });
        saxStream.on('closetag', (name) => {
            if (parser != null) {
                parser.close(saxParser.line, name);
            }
            switch (name) {
                case 'repository':
                case 'messages':
                case 'components':
                case 'header':
                case 'trailer': {
                    parser = null;
                    break;
                }
            }
        });
        saxStream.on('opentag', (node) => {
            const saxNode = node;
            switch (saxNode.name) {
                case 'fix': {
                    switch (instance.parseState) {
                        case parse_state_1.ParseState.FieldDefinitions: {
                            const major = saxNode.attributes.major;
                            const minor = saxNode.attributes.major;
                            const description = `FIX.${major}.${minor}`;
                            instance.definitions = new definition_1.FixDefinitions(fix_definition_source_1.FixDefinitionSource.QuickFix, version_util_1.VersionUtil.resolve(description));
                            break;
                        }
                    }
                    break;
                }
                case 'fields': {
                    switch (instance.parseState) {
                        case parse_state_1.ParseState.FieldDefinitions: {
                            parser = new field_definition_parser_1.FieldDefinitionParser(instance.definitions, instance.numberPasses);
                            break;
                        }
                        default: {
                            parser = null;
                        }
                    }
                    break;
                }
                case 'messages': {
                    switch (instance.parseState) {
                        case parse_state_1.ParseState.Messages: {
                            parser = new message_parser_1.MessageParser(instance.definitions, instance.numberPasses);
                            break;
                        }
                        default:
                            break;
                    }
                    break;
                }
                case 'components': {
                    switch (instance.parseState) {
                        case parse_state_1.ParseState.ComponentsFirstPass:
                        case parse_state_1.ParseState.ComponentsSecondPass:
                        case parse_state_1.ParseState.ComponentsThirdPass:
                            parser = new field_set_parser_1.FieldSetParser(instance.definitions, instance.numberPasses);
                            break;
                    }
                    break;
                }
                case 'field':
                case 'value':
                case 'component':
                case 'group': {
                    if (parser != null) {
                        parser.open(saxParser.line, saxNode);
                    }
                    break;
                }
                case 'message': {
                    switch (instance.parseState) {
                        case parse_state_1.ParseState.Messages: {
                            if (parser != null) {
                                parser.open(saxParser.line, saxNode);
                            }
                            break;
                        }
                        default:
                            break;
                    }
                    break;
                }
                case 'header':
                case 'trailer': {
                    switch (instance.parseState) {
                        case parse_state_1.ParseState.Messages: {
                            parser = new field_set_parser_1.FieldSetParser(instance.definitions, instance.numberPasses);
                            parser.open(saxParser.line, node);
                            break;
                        }
                    }
                    break;
                }
            }
        });
        saxStream.on('ready', () => {
            if (done) {
                parser = null;
                done(null, instance.definitions);
            }
        });
    }
    encloseMessages() {
        const messages = this.definitions.message;
        const keys = messages.keys();
        const trailerName = 'StandardTrailer';
        keys.forEach(k => {
            const message = messages.get(k);
            const trailer = this.definitions.component.get(trailerName);
            if (trailer && !message.components.containsKey(trailerName)) {
                const contained = new contained_1.ContainedComponentField(trailer, message.fields.length, true);
                message.add(contained);
            }
        });
    }
    parse() {
        return new Promise((accept, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.onePass();
                yield this.onePass();
                yield this.onePass();
                yield this.onePass();
                yield this.onePass();
                this.encloseMessages();
                accept(this.definitions);
            }
            catch (e) {
                reject(e);
            }
        }));
    }
    onePass() {
        return __awaiter(this, void 0, void 0, function* () {
            const pass = fs.createReadStream(this.xmlPath);
            const saxStream = require('sax').createStream(true, {});
            pass.pipe(saxStream);
            return this.singlePass(this, saxStream);
        });
    }
}
exports.QuickFixXmlFileParser = QuickFixXmlFileParser;
//# sourceMappingURL=quick-fix-xml-file-parser.js.map