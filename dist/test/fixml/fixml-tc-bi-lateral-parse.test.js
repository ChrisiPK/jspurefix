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
const testFolder = 'examples/FIXML/cme/tc/Delivery Fixed Commodity Swap';
const toViews = new to_views_1.ToViews(testFolder);
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield toViews.load();
}), 45000);
test('expect a view from fix msg', () => {
    const views = toViews.views;
    expect(views.length).toEqual(1);
});
test('expect a batch view ', () => {
    const batch = toViews.batch;
    expect(batch).toBeTruthy();
    const o = batch.toObject();
    expect(o).toBeTruthy();
    const instances = o.Batch;
    expect(Array.isArray(instances)).toEqual(true);
    expect(instances.length).toEqual(1);
});
test('expect an instrument', () => {
    const views = toViews.views;
    const t = views[0].toObject();
    expect(t).toBeTruthy();
    const i = t.Instrument;
    expect(i).toBeTruthy();
});
test('check instrument attributes', () => {
    const views = toViews.views;
    const t = views[0].toObject();
    const i = t.Instrument;
    expect(i).toBeTruthy();
    const iv = views[0].getView('Instrument');
    expect(iv).toBeTruthy();
    expect(i.SecurityExchange).toEqual('XXXX');
    expect(iv.getString('SecurityExchange')).toEqual('XXXX');
    expect(iv.getString('SecurityType')).toEqual('CMDTYSWAP');
    expect(i.SecurityType).toEqual('CMDTYSWAP');
});
test('check instrument groups', () => {
    const views = toViews.views;
    const t = views[0].toObject();
    const i = t.Instrument;
    const stream = i.StreamGrp;
    expect(stream).toBeTruthy();
    expect(Array.isArray(stream));
    expect(stream.length).toEqual(2);
    const grpView = views[0].getView('Instrument.StreamGrp');
    expect(grpView).toBeTruthy();
    const g0 = grpView.getGroupInstance(0);
    const g1 = grpView.getGroupInstance(1);
    expect(g0).toBeTruthy();
    expect(g1).toBeTruthy();
    const keys = ['StreamTotalNotionalUnitOfMeasure', 'StreamTotalNotional', 'StreamNotionalUnitOfMeasure', 'StreamNotionalFrequencyUnit', 'StreamNotionalFrequencyPeriod', 'StreamNotional', 'StreamReceiveSide', 'StreamPaySide', 'StreamType'];
    const v0 = g0.getTypedTags(keys);
    expect(v0[0]).toEqual('MMBtu');
    expect(v0[1]).toEqual(310000.10);
    expect(v0[2]).toEqual('MMBtu');
    expect(v0[3]).toEqual('D');
    expect(v0[4]).toEqual(1);
    expect(v0[5]).toEqual(10000.20);
    expect(v0[6]).toEqual(1);
    expect(v0[7]).toEqual(2);
    expect(v0[8]).toEqual(1);
    const v1 = g1.getTypedTags(keys);
    expect(v1[0]).toEqual('MMBtu');
    expect(v1[1]).toEqual(310000.10);
    expect(v1[2]).toEqual('MMBtu');
    expect(v1[3]).toEqual('D');
    expect(v1[4]).toEqual(1);
    expect(v1[5]).toEqual(10000.20);
    expect(v1[6]).toEqual(2);
    expect(v1[7]).toEqual(1);
    expect(v1[8]).toEqual(0);
});
test('expect Hdr view to be on Batch', () => {
    const batch = toViews.batch;
    const o = batch.toObject();
    const hdr = o.StandardHeader;
    expect(hdr).toBeTruthy();
    expect(hdr.SenderCompID).toEqual('CME');
    expect(hdr.TargetCompID).toEqual('ATS_BROKER1');
    expect(hdr.SenderSubID).toEqual('STP');
    expect(hdr.TargetSubID).toEqual('STP_API_IRAT_T');
});
//# sourceMappingURL=fixml-tc-bi-lateral-parse.test.js.map