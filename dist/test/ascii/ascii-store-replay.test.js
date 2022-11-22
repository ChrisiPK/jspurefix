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
const types_1 = require("../../types");
const setup_1 = require("../env/setup");
const test_recovery_1 = require("../env/test-recovery");
const root = path.join(__dirname, '../../../data');
let definitions;
let server;
let client;
let setup = null;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    setup = new setup_1.Setup('session/test-initiator.json', 'session/test-acceptor.json');
    yield setup.init();
    definitions = setup.definitions;
    const serverConfig = setup.serverConfig;
    const clientConfig = setup.clientConfig;
    const views = yield setup.server.replayer.replayFixFile(path.join(root, 'examples/FIX.4.4/jsfix.test_client.txt'));
    server = new test_recovery_1.TestRecovery(views, serverConfig);
    client = new test_recovery_1.TestRecovery(views, clientConfig);
    yield server.populate();
    yield client.populate();
}), 45000);
test('expect 15 messages in log', () => {
    expect(server.views.length).toEqual(15);
    expect(client.views.length).toEqual(15);
});
test('server store states', () => __awaiter(void 0, void 0, void 0, function* () {
    const s1 = yield server.recovery.store.getState();
    expect(s1.length).toEqual(9);
}));
test('client store states', () => __awaiter(void 0, void 0, void 0, function* () {
    const s1 = yield client.recovery.store.getState();
    expect(s1.length).toEqual(1);
}));
test('server replay request from seq=1 to seq=10', () => __awaiter(void 0, void 0, void 0, function* () {
    const vec = yield server.recovery.getResendRequest(1, 10);
    expect(vec).toBeTruthy();
    expect(Array.isArray(vec));
    expect(vec.length).toEqual(10);
    checkSeqReset(vec[0], 1, 2);
    expect(vec[1].msgType).toEqual(types_1.MsgType.TradeCaptureReportRequestAck);
    expect(vec[1].seqNum).toEqual(2);
    for (let i = 2; i <= 6; ++i) {
        expect(vec[i].msgType).toEqual(types_1.MsgType.TradeCaptureReport);
        expect(vec[i].seqNum).toEqual(i + 1);
    }
    expect(vec[7].msgType).toEqual(types_1.MsgType.TradeCaptureReportRequestAck);
    expect(vec[7].seqNum).toEqual(8);
    for (let i = 8; i < 10; ++i) {
        expect(vec[i].msgType).toEqual(types_1.MsgType.TradeCaptureReport);
        expect(vec[i].seqNum).toEqual(i + 1);
    }
}));
test('client replay request from seq=1 to seq=10', () => __awaiter(void 0, void 0, void 0, function* () {
    const vec = yield client.recovery.getResendRequest(1, 10);
    expect(vec).toBeTruthy();
    expect(Array.isArray(vec));
    expect(vec.length).toEqual(3);
    checkSeqReset(vec[0], 1, 2);
    expect(vec[1].msgType).toEqual(types_1.MsgType.TradeCaptureReportRequest);
    expect(vec[1].seqNum).toEqual(2);
    checkSeqReset(vec[2], 3, 11);
}));
function checkSeqReset(rec, from, to) {
    const reset = rec.obj;
    expect(rec.msgType).toEqual(types_1.MsgType.SequenceReset);
    expect(rec.obj).toBeTruthy();
    expect(rec.seqNum).toEqual(to);
    expect(reset.GapFillFlag).toBeTruthy();
    expect(reset.StandardHeader.MsgType).toEqual(types_1.MsgType.SequenceReset);
    expect(reset.StandardHeader.PossDupFlag).toBeTruthy();
    expect(reset.StandardHeader.MsgSeqNum).toEqual(from);
}
test('client replay request from seq=4 to seq=10', () => __awaiter(void 0, void 0, void 0, function* () {
    const vec = yield client.recovery.getResendRequest(4, 10);
    expect(vec).toBeTruthy();
    expect(Array.isArray(vec));
    expect(vec.length).toEqual(1);
    checkSeqReset(vec[0], 4, 11);
}));
//# sourceMappingURL=ascii-store-replay.test.js.map