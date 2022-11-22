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
const to_views_1 = require("../env/to-views");
const testFolder = 'examples/FIXML/cme/md/settle/';
const toViews = new to_views_1.ToViews(testFolder);
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield toViews.load();
}), 45000);
test('expect 2 views from fix msg', () => {
    const views = toViews.views;
    expect(views.length).toEqual(2);
    const v0 = views[0];
    expect(v0).toBeTruthy();
    const v1 = views[1];
    expect(v1).toBeTruthy();
});
test('expect 1 batch from fix msg', () => {
    const batch = toViews.batch.toObject();
    expect(batch).toBeTruthy();
    expect(batch.Batch).toBeTruthy();
    expect(Array.isArray(batch.Batch)).toBeTruthy();
    expect(batch.Batch.length).toEqual(2);
});
//# sourceMappingURL=fixml-mkt-data-settle-parse.test.js.map