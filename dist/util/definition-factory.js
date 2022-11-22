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
exports.DefinitionFactory = void 0;
const config_1 = require("../config");
const path = require("path");
const fs = require("fs");
const parser_1 = require("../dictionary/parser");
const root = path.join(__dirname, '../../');
class DefinitionFactory {
    getDictPath(p) {
        const dictionary = require(path.join(root, 'data/dictionary.json'));
        return dictionary[p];
    }
    getDefinitions(path, getLogger = config_1.makeEmptyLogger) {
        return __awaiter(this, void 0, void 0, function* () {
            const dp = this.getDictPath(path);
            if (dp) {
                path = dp.dict;
            }
            path = this.norm(path);
            const parser = this.getParser(path, getLogger);
            return parser.parse();
        });
    }
    getParser(path, getLogger) {
        let parser;
        if (fs.lstatSync(path).isDirectory() && path.indexOf('fixml') >= 0) {
            parser = new parser_1.FixXsdParser(path, getLogger);
        }
        else if (fs.lstatSync(path).isDirectory()) {
            parser = new parser_1.RepositoryXmlParser(path, getLogger);
        }
        else {
            parser = new parser_1.QuickFixXmlFileParser(path, getLogger);
        }
        return parser;
    }
    norm(p) {
        let f = p;
        if (!path.isAbsolute(p)) {
            f = path.join(root, f);
        }
        return f;
    }
}
exports.DefinitionFactory = DefinitionFactory;
//# sourceMappingURL=definition-factory.js.map