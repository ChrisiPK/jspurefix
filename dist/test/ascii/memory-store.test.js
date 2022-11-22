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
const store_1 = require("../../store");
const types_1 = require("../../types");
const setup_1 = require("../env/setup");
const root = path.join(__dirname, '../../../data');
let definitions;
let views;
let expected;
let store;
let records;
let setup = null;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    setup = new setup_1.Setup('session/test-initiator.json', null);
    yield setup.init();
    definitions = setup.clientConfig.definitions;
    expected = require(path.join(root, 'examples/FIX.4.4/fix.json'));
    views = yield setup.client.replayer.replayFixFile(path.join(root, 'examples/FIX.4.4/jsfix.test_client.txt'));
    store = new store_1.FixMsgMemoryStore('test', setup.clientConfig);
    records = views.reduce((agg, v) => {
        if (v.getString(types_1.MsgTag.SenderCompID) === 'accept-comp') {
            agg.push(store_1.FixMsgStoreRecord.toMsgStoreRecord(v));
        }
        return agg;
    }, []);
    const toWrite = records.map(r => store.put(r));
    yield Promise.all(toWrite);
}), 45000);
test('expect 15 messages in log', () => {
    expect(views.length).toEqual(15);
});
test('check messages loaded into store', () => __awaiter(void 0, void 0, void 0, function* () {
    const state = yield store.getState();
    expect(state.lastSeq).toEqual(10);
    expect(state.length).toEqual(9);
}));
test('fetch sequence number from store', () => __awaiter(void 0, void 0, void 0, function* () {
    const res1 = yield store.exists(1);
    expect(res1).toBeFalsy();
    for (let seq = 2; seq <= 10; ++seq) {
        const res = yield store.exists(seq);
        expect(res).toBeTruthy();
        const get = yield store.get(seq);
        expect(get).toBeTruthy();
    }
}));
test('fetch from seqNum to inferred as end ', () => __awaiter(void 0, void 0, void 0, function* () {
    const range1 = yield store.getSeqNumRange(5);
    expect(range1.length).toEqual(6);
    expect(range1[0].seqNum).toEqual(5);
    expect(range1[range1.length - 1].seqNum).toEqual(10);
}));
test('fetch from seqNum to = start', () => __awaiter(void 0, void 0, void 0, function* () {
    const range1 = yield store.getSeqNumRange(5, 5);
    expect(range1.length).toEqual(1);
    expect(range1[0].seqNum).toEqual(5);
}));
test('fetch start from seqNum not in store', () => __awaiter(void 0, void 0, void 0, function* () {
    const range1 = yield store.getSeqNumRange(1);
    expect(range1.length).toEqual(9);
    expect(range1[0].seqNum).toEqual(2);
    expect(range1[range1.length - 1].seqNum).toEqual(10);
}));
//# sourceMappingURL=memory-store.test.js.map