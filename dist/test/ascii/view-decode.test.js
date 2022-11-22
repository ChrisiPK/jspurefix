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
const path = require("path");
const quickfix_1 = require("../../types/FIX4.4/quickfix");
const setup_1 = require("../env/setup");
const root = path.join(__dirname, '../../../data');
let definitions;
let session;
let views;
let structure;
let view;
let setup = null;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    setup = new setup_1.Setup('session/qf-fix44.json', null);
    yield setup.init();
    definitions = setup.definitions;
    session = setup.client.transmitter;
    views = yield setup.client.replayer.replayFixFile(path.join(root, 'examples/FIX.4.4/quickfix/md-data-snapshot/fix.txt'));
    if (views && views.length > 0) {
        view = views[0];
        structure = view.structure;
    }
}), 45000);
test('expect a structure from fix msg', () => {
    expect(structure).toBeTruthy();
});
test('get NoMDEntries directly - expect an array', () => {
    const noMDEntriesView = view.getView('NoMDEntries');
    expect(noMDEntriesView).toBeTruthy();
    const noMDEntries = noMDEntriesView.toObject();
    expect(Array.isArray(noMDEntries)).toEqual(true);
    expect(noMDEntries.length).toEqual(2);
});
test('get NoMDEntries via MDFullGrp - array within a component', () => {
    const mdFullGrp = view.getView('MDFullGrp');
    expect(mdFullGrp).toBeTruthy();
    const mdFullGrpAsObject = mdFullGrp.toObject();
    const noMDEntries = mdFullGrpAsObject.NoMDEntries;
    expect(Array.isArray(noMDEntries)).toEqual(true);
    expect(noMDEntries.length).toEqual(2);
});
function getMdEntriesObjects() {
    const noMDEntriesView = view.getView('NoMDEntries');
    expect(noMDEntriesView).toBeTruthy();
    const noMDEntries = noMDEntriesView.toObject();
    expect(Array.isArray(noMDEntries)).toEqual(true);
    expect(noMDEntries.length).toEqual(2);
    return noMDEntries;
}
test('get UTCDATEONLY from NoMDEntries instance 1', () => {
    const noMdEntriesAsObjects = getMdEntriesObjects();
    const noMDEntriesView = view.getView('NoMDEntries');
    const mmEntryView = noMDEntriesView.getGroupInstance(1);
    const instance = noMdEntriesAsObjects[1];
    const mmEntryDateAsString = mmEntryView.getString('MDEntryDate');
    expect(mmEntryDateAsString).toEqual('20210129');
    expect(mmEntryView.getString(272)).toEqual('20210129');
    const asUtc = new Date(Date.UTC(2021, 0, 29));
    expect(instance.MDEntryDate).toEqual(asUtc);
});
test('get UTCTIMEONLY from NoMDEntries instance 0', () => {
    const noMdEntriesAsObjects = getMdEntriesObjects();
    const noMDEntriesView = view.getView('NoMDEntries');
    const mmEntryView = noMDEntriesView.getGroupInstance(0);
    const instance = noMdEntriesAsObjects[0];
    const mmEntryTimeAsString = mmEntryView.getString('MDEntryTime');
    expect(mmEntryTimeAsString).toEqual('19:45:19.852');
    expect(mmEntryView.getString(273)).toEqual('19:45:19.852');
    const asUtc = new Date(Date.UTC(0, 0, 0, 19, 45, 19, 852));
    expect(instance.MDEntryTime).toEqual(asUtc);
});
test('get UTCTIMESTAMP from NoMDEntries instance 1', () => {
    const noMdEntriesAsObjects = getMdEntriesObjects();
    const noMDEntriesView = view.getView('NoMDEntries');
    const mmEntryView = noMDEntriesView.getGroupInstance(1);
    const instance = noMdEntriesAsObjects[1];
    const mmEntryExpireTimeAsString = mmEntryView.getString('ExpireTime');
    expect(mmEntryExpireTimeAsString).toEqual('20210129-19:45:19.000');
    expect(mmEntryView.getString(126)).toEqual('20210129-19:45:19.000');
    const asUtc = new Date(Date.UTC(2021, 0, 29, 19, 45, 19, 0));
    const d = instance.ExpireTime;
    expect(d).toEqual(asUtc);
});
test('get MinQty from NoMDEntries instance 1', () => {
    const noMdEntriesAsObjects = getMdEntriesObjects();
    const noMDEntriesView = view.getView('NoMDEntries');
    const mmEntryView = noMDEntriesView.getGroupInstance(1);
    const instance = noMdEntriesAsObjects[1];
    const mmEntryMinQtyAsString = mmEntryView.getString('MinQty');
    expect(mmEntryMinQtyAsString).toEqual('9.6478');
    expect(mmEntryView.getString(110)).toEqual('9.6478');
    expect(instance.MinQty).toEqual(9.6478);
});
test('get selection tags one call - tag ids', () => {
    const [a, b, c, d] = view.getTypedTags([8, 9, 35, 49]);
    expect(a).toEqual('FIX4.4');
    expect(b).toEqual(3957);
    expect(c).toEqual('W');
    expect(d).toEqual('init-comp');
});
test('get selection tags one call - tag names', () => {
    const [a, b, c, d, e, f] = view.getTypedTags([
        'BeginString',
        'BodyLength',
        'MsgType',
        'MsgSeqNum',
        'MDReqID',
        'Symbol'
    ]);
    expect(a).toEqual('FIX4.4');
    expect(b).toEqual(3957);
    expect(c).toEqual('W');
    expect(d).toEqual(1);
    expect(e).toEqual('Lorem');
    expect(f).toEqual('ipsum');
});
test('nested view fetch', () => {
    const legGrpView = view.getView('InstrmtLegGrp.NoLegs');
    expect(legGrpView).toBeTruthy();
    const legGrp = legGrpView.toObject();
    expect(legGrp).toBeTruthy();
    expect(Array.isArray(legGrp));
    expect(legGrp.length).toEqual(3);
});
test('view buffer', () => {
    const asciiView = view;
    const buffer = asciiView.toBuffer('?'.charCodeAt(0));
    const txt = buffer.toString();
    expect(txt.startsWith('8=FIX4.4?9='));
    expect(txt.endsWith('?10=198?'));
});
function toFixMessage(o, msg) {
    session.encodeMessage(msg.msgType, o);
    return session.buffer.toString();
}
function BidOfferRequest(symbol) {
    return {
        MDReqID: '1',
        SubscriptionRequestType: quickfix_1.SubscriptionRequestType.SnapshotPlusUpdates,
        MarketDepth: 0,
        MDReqGrp: {
            NoMDEntryTypes: [
                {
                    MDEntryType: quickfix_1.MDEntryType.Bid
                },
                {
                    MDEntryType: quickfix_1.MDEntryType.Offer
                }
            ]
        },
        InstrmtMDReqGrp: {
            NoRelatedSym: [
                {
                    Instrument: {
                        Symbol: symbol
                    }
                }
            ]
        }
    };
}
test('market data request', () => __awaiter(void 0, void 0, void 0, function* () {
    const mdr = BidOfferRequest('EUR/USD');
    const def = definitions.message.get('MarketDataRequest');
    const fix = toFixMessage(mdr, def);
    expect(fix).toBeTruthy();
    const res = yield setup.client.parseText(fix);
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual(def.msgType);
    const gv = res.view.getView('MDReqGrp');
    expect(gv).toBeTruthy();
    const s = gv.toString();
    const newLine = require('os').EOL;
    expect(s).toEqual(`[0] 267 (NoMDEntryTypes) = 2, [1] 269 (MDEntryType) = 0[Bid]${newLine}[2] 269 (MDEntryType) = 1[Offer]`);
    const iv = res.view.getView('InstrmtMDReqGrp.NoRelatedSym');
    expect(iv).toBeTruthy();
    const s2 = iv.toString();
    expect(s2).toEqual(`[0] 146 (NoRelatedSym) = 1, [1] 55 (Symbol) = EUR/USD${newLine}`);
}));
//# sourceMappingURL=view-decode.test.js.map