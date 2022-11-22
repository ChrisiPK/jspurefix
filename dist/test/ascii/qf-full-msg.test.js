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
const ascii_1 = require("../../buffer/ascii");
const util_1 = require("../../util");
const index_1 = require("../../index");
const ascii_msg_transmitter_1 = require("../../transport/ascii/ascii-msg-transmitter");
const setup_1 = require("../env/setup");
const runtime_1 = require("../../runtime");
let definitions;
let jsonHelper;
let config;
const root = path.join(__dirname, '../../../data/examples/FIX.4.4/quickfix');
let setup;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    setup = new setup_1.Setup('session/qf-fix44.json', null);
    yield setup.init();
    definitions = setup.definitions;
    jsonHelper = new util_1.JsonHelper(definitions);
    config = setup.clientConfig;
}), 45000);
function testEncodeDecode(msgType, msg) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let session = new ascii_msg_transmitter_1.AsciiMsgTransmitter(config);
            const parseBuffer = config.sessionContainer.resolve(runtime_1.DITokens.ParseBuffer);
            const parser = new ascii_1.AsciiParser(config, session.encodeStream, parseBuffer);
            parser.on('msg', (msgType, view) => {
                const o = view.toObject();
                delete o.StandardHeader;
                delete o.StandardTrailer;
                resolve(o);
            });
            parser.on('error', (e) => {
                reject(e);
            });
            session.send(msgType, msg);
        }));
    });
}
test('test logon JSON => object => fix => object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = index_1.MsgType.Logon;
    const file = path.join(root, 'logon/object.json');
    const msg = jsonHelper.fromJson(file, msgType);
    yield expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg);
}), 1000);
test('test execution report JSON => object => fix => object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = index_1.MsgType.ExecutionReport;
    const file = path.join(root, 'execution-report/object.json');
    const msg = jsonHelper.fromJson(file, msgType);
    yield expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg);
}), 2000);
test('test order cxl reject JSON => object => fix => object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = index_1.MsgType.OrderCancelReject;
    const file = path.join(root, 'order-cancel-reject/object.json');
    const msg = jsonHelper.fromJson(file, msgType);
    yield expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg);
}), 1000);
test('test quote request JSON => object => fix => object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = index_1.MsgType.QuoteRequest;
    const file = path.join(root, 'quote-request/object.json');
    const msg = jsonHelper.fromJson(file, msgType);
    yield expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg);
}), 1000);
test('test md request JSON => object => fix => object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = index_1.MsgType.MarketDataSnapshotFullRefresh;
    const file = path.join(root, 'md-data-snapshot/object.json');
    const msg = jsonHelper.fromJson(file, msgType);
    yield expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg);
}), 1000);
test('parse MD snapshot msg', () => __awaiter(void 0, void 0, void 0, function* () {
    const msg = '8=FIX.4.4|9=224|35=W|34=8|49=TEST|56=TEST|52=20220621-17:16:16.414|262=#GBPUSD#0#|55=GBPUSD|268=3|269=0|270=1.22759|271=1|63=0|272=20220623|768=0|269=1|270=1.22759|271=1|63=0|272=20220623|768=0|269=H|270=1.22759|63=0|272=20220623|768=0|10=066|';
    const res = yield setup.client.parseText(msg);
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual(index_1.MsgType.MarketDataSnapshotFullRefresh);
    const v2 = res.view.getView('MDFullGrp');
    const o = v2.toObject();
    expect(o).toBeTruthy();
}));
//# sourceMappingURL=qf-full-msg.test.js.map