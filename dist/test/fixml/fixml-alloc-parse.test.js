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
const moment = require("moment");
const testFolder = 'examples/FIXML/cme/alloc/Clearing System Notifies Allocation to the Claiming Firm - Cross-Exchange';
const toViews = new to_views_1.ToViews(testFolder);
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield toViews.load();
}), 45000);
test('expect a view from fix msg', () => {
    const views = toViews.views;
    expect(views.length).toEqual(1);
});
test('expect Hdr view to be available', () => {
    const views = toViews.views;
    const v = views[0];
    const hdr = v.getView('Hdr');
    expect(hdr).toBeTruthy();
});
test('fetch attributes from Hdr', () => {
    const views = toViews.views;
    const v = views[0];
    const hdr = v.getView('Hdr').toObject();
    expect(hdr).toBeTruthy();
    expect(hdr.SenderCompID).toEqual('CME');
    expect(v.getTyped('SID')).toEqual('CME');
    expect(v.getTyped('TID')).toEqual('560');
    expect(hdr.SenderSubID).toEqual('CME');
    expect(hdr.TargetSubID).toEqual('CME');
});
test('fetch attributes from main object', () => {
    const views = toViews.views;
    const v = views[0];
    const allocation = v.toObject();
    expect(allocation.AllocReportID).toEqual('12E251CB2133225C1CC112533311');
    expect(allocation.TradeMatchID).toEqual('12A80D9ED85HI04008310');
    expect(allocation.AllocReportType).toEqual(16);
    expect(allocation.AllocStatus).toEqual(6);
    expect(allocation.TrdType).toEqual(2);
    expect(allocation.ExecutingClaimingIndicator).toEqual(1);
    expect(allocation.Quantity).toEqual(4);
});
test('test complex sub structure OrdAllocGrp', () => {
    const views = toViews.views;
    const v = views[0];
    const allocInstruction = v.toObject();
    expect(allocInstruction).toBeTruthy();
    expect(allocInstruction.OrdAllocGrp[0].ClOrdID).toEqual('SX1');
});
test('test instrument on fixml allocation - use abbreviation', () => {
    const views = toViews.views;
    const v = views[0];
    const instrument = v.getView('Instrmt').toObject();
    expect(instrument).toBeTruthy();
});
test('test instrument attributes', () => {
    const views = toViews.views;
    const v = views[0];
    const instrument = v.getView('Instrmt').toObject();
    expect(instrument).toBeTruthy();
    expect(instrument.SecurityID).toEqual('ED');
    expect(instrument.CFICode).toEqual('FFDCSO');
    expect(instrument.SecurityType).toEqual('FUT');
    expect(instrument.MaturityMonthYear).toEqual('201512');
    expect(instrument.PriceQuoteCurrency).toEqual('USD');
    expect(instrument.SecurityExchange).toEqual('CME');
});
test('test instrument on fixml allocation - use full name', () => {
    const views = toViews.views;
    const v = views[0];
    const instrument = v.getView('Instrument').toObject();
    expect(instrument).toBeTruthy();
});
test('test complex sub structure AllocGrp', () => {
    const views = toViews.views;
    const v = views[0];
    const allocInstruction = v.toObject();
    expect(allocInstruction).toBeTruthy();
    expect(Array.isArray(allocInstruction.AllocGrp)).toBeTruthy();
    expect(allocInstruction.AllocGrp.length).toEqual(1);
    expect(allocInstruction.AllocGrp[0].AllocQty).toEqual(4);
    expect(allocInstruction.AllocGrp[0].IndividualAllocID).toEqual('307006');
    expect(allocInstruction.AllocGrp[0].SecondaryIndividualAllocID).toEqual('178004');
    expect(allocInstruction.AllocGrp[0].AllocCustomerCapacity).toEqual('4');
    expect(allocInstruction.AllocGrp[0].OriginalSecondaryTradeID).toEqual('12A80D9ED85HI040083A');
});
test('test OrdAllocGrp', () => {
    const views = toViews.views;
    const v = views[0];
    const ordAlloc = v.getView('OrdAllocGrp').toObject();
    expect(ordAlloc).toBeTruthy();
    expect(Array.isArray(ordAlloc)).toBeTruthy();
    expect(ordAlloc.length).toEqual(1);
    expect(ordAlloc[0].ClOrdID).toEqual('SX1');
});
test('main Party Group', () => {
    const views = toViews.views;
    const v = views[0];
    const parties = v.getView('Parties').toObject();
    expect(parties).toBeTruthy();
    expect(Array.isArray(parties)).toBeTruthy();
    expect(parties.length).toEqual(4);
    expect(parties[0]).toEqual({
        PartyID: 'CME',
        PartyRole: 21
    });
    expect(parties[1]).toEqual({
        PartyID: 'CME',
        PartyRole: 22
    });
    expect(parties[2]).toEqual({
        PartyID: '560',
        PartyRole: 1
    });
});
test('test party sub group', () => {
    const views = toViews.views;
    const v = views[0];
    const parties = v.getView('Parties.PtysSubGrp').toObject();
    expect(parties).toBeTruthy();
    expect(Array.isArray(parties)).toBeTruthy();
    expect(parties.length).toEqual(1);
    expect(parties[0]).toEqual({
        PartySubID: '1',
        MiscFeeType: '26'
    });
});
test('test AllocGrp.NestedParties.NstdPtysSubGrp', () => {
    const views = toViews.views;
    const v = views[0];
    const parties = v.getView('AllocGrp.NestedParties.NstdPtysSubGrp').toObject();
    expect(parties).toBeTruthy();
    expect(Array.isArray(parties)).toBeTruthy();
    expect(parties.length).toEqual(1);
    expect(parties[0]).toEqual({
        NestedPartySubID: '1',
        NestedPartySubIDType: 26
    });
});
test('main attributes', () => {
    const views = toViews.views;
    const v = views[0];
    expect(v.getTyped('AllocReportID')).toEqual('12E251CB2133225C1CC112533311');
    expect(v.getTyped('TradeMatchID')).toEqual('12A80D9ED85HI04008310');
    expect(v.getTyped('AllocReportType')).toEqual(16);
    expect(v.getTyped('TrdType')).toEqual(2);
    expect(v.getTyped('AvgPx')).toEqual(95.5);
    expect(v.getTyped('TradeDate')).toEqual(moment('2015-08-05').utc(true).toDate());
    expect(v.getTyped('TradeMatchID')).toEqual('12A80D9ED85HI04008310');
});
//# sourceMappingURL=fixml-alloc-parse.test.js.map