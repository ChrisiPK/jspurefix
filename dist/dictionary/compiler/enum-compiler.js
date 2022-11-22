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
exports.EnumCompiler = void 0;
const standard_snippet_1 = require("./standard-snippet");
const buffer_1 = require("../../buffer");
const fs = require("fs");
const util = require("util");
const Path = require("path");
const _ = require("lodash");
const tag_type_1 = require("../../buffer/tag/tag-type");
class EnumCompiler {
    constructor(definitions, settings) {
        this.definitions = definitions;
        this.settings = settings;
        this.buffer = new buffer_1.ElasticBuffer();
        this.consolidated = new buffer_1.ElasticBuffer();
        this.snippets = new standard_snippet_1.StandardSnippet(settings);
    }
    static getIndex() {
        const lines = [
            `export * from './all-enum'`,
            `export * from './msg_tag'`,
            ''
        ];
        return lines.join(require('os').EOL);
    }
    generate(asOneFile = null) {
        return __awaiter(this, void 0, void 0, function* () {
            this.generateTagEnum('MsgTag').then(() => __awaiter(this, void 0, void 0, function* () {
                const toDo = this.toDo();
                toDo.forEach((field) => __awaiter(this, void 0, void 0, function* () {
                    yield this.oneEnum(field, asOneFile);
                }));
                if (asOneFile) {
                    yield this.writeAsOne(asOneFile);
                    yield this.writeFile('index', EnumCompiler.getIndex());
                }
            })).catch((e) => {
                throw e;
            });
        });
    }
    oneEnum(field, asOneFile) {
        return __awaiter(this, void 0, void 0, function* () {
            const newLine = require('os').EOL;
            const api = this.generateEnum(field);
            if (!asOneFile) {
                yield this.writeFile(field.name, api).catch((e) => {
                    throw e;
                });
            }
            else {
                this.consolidated.writeString(api);
                this.consolidated.writeString(newLine);
            }
        });
    }
    generateEnum(field) {
        const buffer = this.buffer;
        if (field == null) {
            throw new Error(`no simple field ${name} exists in definitions`);
        }
        if (!field.isEnum()) {
            throw new Error(`field ${name} is not an enum type`);
        }
        return this.create(field.name, field.description, () => {
            const newLine = require('os').EOL;
            return field.enums.keys().reduce((a, latest, i, arr) => {
                let k = field.resolveEnum(latest);
                let v = latest;
                switch (field.tagType) {
                    case tag_type_1.TagType.Int: {
                        v = parseInt(latest, 10);
                        break;
                    }
                }
                buffer.writeString(this.snippets.enumValue(k, v, 1));
                if (i < arr.length - 1) {
                    buffer.writeString(',');
                }
                buffer.writeString(newLine);
                return 0;
            }, 0);
        });
    }
    generateTagEnum(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const newLine = require('os').EOL;
            const tags = this.definitions.tagToSimple;
            const snippets = this.snippets;
            const api = this.create(name, null, () => {
                const buffer = this.buffer;
                return Object.keys(tags).reduce((a, latest, i, arr) => {
                    const tag = parseInt(latest, 10);
                    const sf = tags[tag];
                    if (sf) {
                        if (this.settings.comment && sf.description) {
                            this.commentBlock(sf.description);
                        }
                        buffer.writeString(snippets.enumValue(sf.name, tag, 1));
                        if (i < arr.length - 1) {
                            buffer.writeString(',');
                        }
                        buffer.writeString(newLine);
                    }
                    return a;
                }, 0);
            });
            yield this.writeFile(name, api);
        });
    }
    toDo() {
        const done = {};
        return this.definitions.simple.values().reduce((a, latest) => {
            if (latest.isEnum() && !done[latest.name]) {
                done[latest.name] = true;
                a.push(latest);
            }
            return a;
        }, []);
    }
    writeAsOne(asOneFile) {
        return __awaiter(this, void 0, void 0, function* () {
            const writer = util.promisify(fs.writeFile);
            yield writer(asOneFile, this.consolidated.toString(), {
                encoding: 'utf8'
            }).catch((e) => {
                throw e;
            });
        });
    }
    commentBlock(comment) {
        const buffer = this.buffer;
        const snippets = this.snippets;
        const newLine = require('os').EOL;
        buffer.writeString(snippets.startBlockComment(0));
        buffer.writeString(newLine);
        buffer.writeString(snippets.commentBox(comment));
        buffer.writeString(newLine);
        buffer.writeString(snippets.endBlockComment(0));
        buffer.writeString(newLine);
    }
    writeFile(name, api) {
        return __awaiter(this, void 0, void 0, function* () {
            const writer = util.promisify(fs.writeFile);
            const fullName = this.getFileName(name);
            yield writer(fullName, api, {
                encoding: 'utf8'
            }).catch((e) => {
                throw e;
            });
        });
    }
    getFileName(name) {
        const snake = _.snakeCase(name);
        const settings = this.settings;
        const fileName = `${snake}.ts`;
        let path = `${settings.output}/enum/`;
        return Path.join(path, fileName);
    }
    create(name, description, populateMembers) {
        const newLine = require('os').EOL;
        const buffer = this.buffer;
        buffer.reset();
        const snippets = this.snippets;
        if (this.settings.comment && description) {
            this.commentBlock(description);
        }
        buffer.writeString(snippets.enum(name, 0));
        buffer.writeString(' ');
        buffer.writeString(snippets.startBlock(0));
        buffer.writeString(newLine);
        populateMembers();
        buffer.writeString(snippets.endBlock(0));
        buffer.writeString(newLine);
        return buffer.toString();
    }
}
exports.EnumCompiler = EnumCompiler;
//# sourceMappingURL=enum-compiler.js.map