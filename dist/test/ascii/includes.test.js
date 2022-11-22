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
require("reflect-metadata");
const include_graph_1 = require("../../dictionary/parser/fixml/include-graph");
const path = require("path");
let includes;
const ver = '5-0-SP2';
const root = path.join(__dirname, `../../../data/fix_repo/fixmlschema_FIX.5.0SP2_EP228`);
const dataTypes = `fixml-datatypes-${ver}.xsd`;
const fieldsBase = `fixml-fields-base-${ver}.xsd`;
const fieldsImpl = `fixml-fields-impl-${ver}.xsd`;
const componentsBase = `fixml-components-base-${ver}.xsd`;
const componentsImpl = `fixml-components-impl-${ver}.xsd`;
const main = `fixml-main-${ver}.xsd`;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    includes = new include_graph_1.IncludeGraph(root, main);
    yield includes.build();
}), 45000);
test('test resolving node with no dependencies', () => __awaiter(void 0, void 0, void 0, function* () {
    expect(includes.resolve(dataTypes)).toEqual([dataTypes]);
}), 1000);
test('test resolving fields base with 1 dependency', () => __awaiter(void 0, void 0, void 0, function* () {
    expect(includes.resolve(fieldsBase)).toEqual([dataTypes, fieldsBase]);
}), 1000);
test('test resolving fields impl with 2 dependencies', () => __awaiter(void 0, void 0, void 0, function* () {
    expect(includes.resolve(fieldsImpl)).toEqual([dataTypes, fieldsBase, fieldsImpl]);
}), 1000);
test('test resolving components base depends on fields impl', () => __awaiter(void 0, void 0, void 0, function* () {
    expect(includes.resolve(componentsBase)).toEqual([dataTypes, fieldsBase, fieldsImpl, componentsBase]);
}), 1000);
test('test resolving components impl depends on components base', () => __awaiter(void 0, void 0, void 0, function* () {
    expect(includes.resolve(componentsImpl)).toEqual([dataTypes, fieldsBase, fieldsImpl, componentsBase, componentsImpl]);
}), 1000);
//# sourceMappingURL=includes.test.js.map