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
exports.FixXsdParser = void 0;
const definition_1 = require("../../definition");
const fix_parser_1 = require("../../fix-parser");
const fields_parser_1 = require("./fields-parser");
const include_graph_1 = require("./include-graph");
const components_parser_1 = require("./components-parser");
const path = require("path");
const fix_definition_source_1 = require("../../fix-definition-source");
const fix_versions_1 = require("../../fix-versions");
class FixXsdParser extends fix_parser_1.FixParser {
    constructor(rootPath, getLogger) {
        super();
        this.rootPath = rootPath;
        this.getLogger = getLogger;
        this.logger = getLogger('FixXsdParser');
        this.definitions = new definition_1.FixDefinitions(fix_definition_source_1.FixDefinitionSource.FixmlRepo, fix_versions_1.FixVersion.FIXML50SP2);
    }
    parse() {
        return __awaiter(this, void 0, void 0, function* () {
            const definitions = this.definitions;
            const ver = '5-0-SP2';
            const main = `fixml-main-${ver}.xsd`;
            const logger = this.logger;
            logger.info(`resolve includes ${main} from root ${this.rootPath}`);
            const t = new include_graph_1.IncludeGraph(this.rootPath, main);
            yield t.build();
            const resolved = t.resolve(main);
            const fields = new fields_parser_1.FieldsParser(definitions);
            const components = new components_parser_1.ComponentsParser(definitions);
            const filtered = resolved.reduce((a, f) => {
                if (f.indexOf('-impl-') || f.indexOf('-base-')) {
                    a.push(f);
                }
                return a;
            }, []);
            for (let f of filtered) {
                const parser = f.indexOf('-fields-') > 0 ? fields : components;
                logger.info(`parsing file ${f}`);
                yield parser.parse(path.join(this.rootPath, f));
            }
            return this.definitions;
        });
    }
}
exports.FixXsdParser = FixXsdParser;
//# sourceMappingURL=fix-xsd-parser.js.map