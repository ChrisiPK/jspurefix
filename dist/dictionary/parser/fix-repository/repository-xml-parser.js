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
exports.RepositoryXmlParser = void 0;
const fs = require("fs");
const path = require("path");
const util_1 = require("util");
const abbreviations_parser_1 = require("./abbreviations-parser");
const components_parser_1 = require("./components-parser");
const enums_parser_1 = require("./enums-parser");
const fields_parser_1 = require("./fields-parser");
const messages_parser_1 = require("./messages-parser");
const msg_contents_parser_1 = require("./msg-contents-parser");
const repository_1 = require("./repository");
const fix_parser_1 = require("../../fix-parser");
const data_types_parser_1 = require("./data-types-parser");
const version_util_1 = require("../../version-util");
class RepositoryXmlParser extends fix_parser_1.FixParser {
    constructor(rootPath, getLogger) {
        super();
        this.rootPath = rootPath;
        this.getLogger = getLogger;
        this.singlePass = (0, util_1.promisify)(RepositoryXmlParser.subscribe);
        this.logger = getLogger('RepositoryXmlParser');
        this.repository = new repository_1.Repository(version_util_1.VersionUtil.resolve(this.rootPath), getLogger);
    }
    static subscribe(instance, saxStream, done) {
        let parser;
        let pending;
        const saxParser = saxStream._parser;
        saxStream.on('error', (e) => {
            done(e, null);
        });
        saxStream.on('closetag', (name) => {
            switch (name) {
                case 'Datatypes':
                case 'Abbreviations':
                case 'Messages':
                case 'MsgContents':
                case 'Components':
                case 'Fields':
                case 'Enums': {
                    if (parser != null) {
                        parser.close(saxParser.line, name);
                        instance.repository.assign(name, parser.data);
                        parser = null;
                    }
                    break;
                }
                case 'Datatype':
                case 'Abbreviation':
                case 'MsgContent':
                case 'Field':
                case 'Enum':
                case 'Component':
                case 'Message': {
                    if (parser != null) {
                        parser.close(saxParser.line, name);
                    }
                    break;
                }
                default: {
                    pending = null;
                    break;
                }
            }
        });
        saxStream.on('text', (t) => {
            t = t.trim();
            if (pending) {
                parser.value(saxParser.line, pending, t);
            }
        });
        saxStream.on('opentag', (node) => {
            const saxNode = node;
            switch (saxNode.name) {
                case 'Datatypes': {
                    parser = new data_types_parser_1.DataTypesParser();
                    break;
                }
                case 'Fields': {
                    parser = new fields_parser_1.FieldsParser();
                    break;
                }
                case 'Enums': {
                    parser = new enums_parser_1.EnumsParser();
                    break;
                }
                case 'Components': {
                    parser = new components_parser_1.ComponentsParser();
                    break;
                }
                case 'Messages': {
                    parser = new messages_parser_1.MessagesParser();
                    break;
                }
                case 'MsgContents': {
                    parser = new msg_contents_parser_1.MsgContentsParser();
                    break;
                }
                case 'Abbreviations': {
                    parser = new abbreviations_parser_1.AbbreviationsParser();
                    break;
                }
                case 'Datatype':
                case 'Abbreviation':
                case 'Field':
                case 'Message':
                case 'MsgContent':
                case 'Enum':
                case 'Component': {
                    if (parser != null) {
                        parser.open(saxParser.line, saxNode);
                    }
                    break;
                }
                default: {
                    pending = saxNode.name;
                }
            }
        });
        saxStream.on('ready', () => {
            if (done) {
                parser = null;
                done(null, instance.repository.definitions);
            }
        });
    }
    parse() {
        return new Promise((accept, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.onePass('Datatypes.xml');
                yield this.onePass('Fields.xml');
                yield this.onePass('Enums.xml');
                yield this.onePass('Components.xml');
                yield this.onePass('Messages.xml');
                yield this.onePass('MsgContents.xml');
                if (this.repository.includesAbbreviations) {
                    yield this.onePass('Abbreviations.xml');
                }
                accept(this.repository.definitions);
            }
            catch (e) {
                reject(e);
            }
        }));
    }
    onePass(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const logger = this.logger;
            const fullFileName = path.join(this.rootPath, fileName);
            const pass = fs.createReadStream(fullFileName);
            logger.info(`reading ${fullFileName}`);
            const saxStream = require('sax').createStream(true, {});
            pass.pipe(saxStream);
            yield this.singlePass(this, saxStream);
        });
    }
}
exports.RepositoryXmlParser = RepositoryXmlParser;
//# sourceMappingURL=repository-xml-parser.js.map