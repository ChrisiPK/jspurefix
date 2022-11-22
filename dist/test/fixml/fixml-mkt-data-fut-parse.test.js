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
const testFolder = 'examples/FIXML/cme/md/futures/';
const toViews = new to_views_1.ToViews(testFolder);
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield toViews.load();
}), 45000);
test('expect a view from fix msg', () => {
    const views = toViews.views;
    expect(views.length).toEqual(1);
    const v0 = views[0];
    expect(v0).toBeTruthy();
});
test('test msg structure', () => {
    const views = toViews.views;
    const v0 = views[0].toObject();
    expect(v0).toBeTruthy();
    expect(v0.ClearingBusinessDate).toEqual(new Date('2008-12-09T00:00:00.000Z'));
    expect(v0.Instrument).toBeTruthy();
    expect(v0.MDFullGrp).toBeTruthy();
});
test('expect an instrument from fix msg', () => {
    const views = toViews.views;
    const v0 = views[0].getView('Instrument');
    expect(v0).toBeTruthy();
    const i = v0.toObject();
    expect(i).toBeTruthy();
    expect(i.Symbol).toEqual('ZCZ9');
    expect(i.SecurityID).toEqual('01');
    expect(i.SecurityIDSource).toEqual('H');
    expect(i.CFICode).toEqual('FFCPSO');
    expect(i.SecurityType).toEqual('FUT');
    expect(i.MaturityMonthYear).toEqual('200906');
    expect(i.SecurityExchange).toEqual('CME');
});
test('expect an md group from fix msg', () => {
    const views = toViews.views;
    const v0 = views[0].getView('MDFullGrp');
    expect(v0).toBeTruthy();
    const fullGrp = v0.toObject();
    expect(fullGrp).toBeTruthy();
    expect(Array.isArray(fullGrp));
    expect(fullGrp.length).toEqual(1);
    const first = fullGrp[0];
    expect(first).toBeTruthy();
    expect(first.MDEntryPx).toEqual(18.97);
    expect(first.MDEntryType).toEqual('6');
    expect(first.MDMkt).toEqual('CME');
});
//# sourceMappingURL=fixml-mkt-data-fut-parse.test.js.map