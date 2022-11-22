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
const setup_1 = require("../env/setup");
const runtime_1 = require("../../runtime");
let definitions;
let jsonHelper;
let session;
const root = path.join(__dirname, '../../../data/examples/FIX.4.4/repo/');
let config;
let setup = null;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    setup = new setup_1.Setup();
    yield setup.init();
    definitions = setup.definitions;
    jsonHelper = new util_1.JsonHelper(definitions);
    config = setup.clientConfig;
    session = setup.clientSessionContainer.resolve(runtime_1.DITokens.MsgTransmitter);
}), 30000);
function testEncodeDecode(msgType, msg) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const rxBuffer = config.sessionContainer.resolve(runtime_1.DITokens.ParseBuffer);
            const parser = new ascii_1.AsciiParser(config, session.encodeStream, rxBuffer);
            parser.on('msg', (msgType, view) => {
                const o = view.toObject();
                delete o['StandardHeader'];
                delete o['StandardTrailer'];
                resolve(o);
            });
            parser.on('error', (e) => {
                reject(e);
            });
            session.send(msgType, msg);
        }));
    });
}
test('check 1 digit checksum format', () => __awaiter(void 0, void 0, void 0, function* () {
    const factory = session.config.factory;
    const cs = factory.trailer(1);
    expect(cs.CheckSum).toEqual('001');
}));
test('check 2 digit checksum format', () => __awaiter(void 0, void 0, void 0, function* () {
    const factory = session.config.factory;
    const cs = factory.trailer(10);
    expect(cs.CheckSum).toEqual('010');
}));
test('check 3 digit checksum format', () => __awaiter(void 0, void 0, void 0, function* () {
    const factory = session.config.factory;
    const cs = factory.trailer(100);
    expect(cs.CheckSum).toEqual('100');
}));
test('AE object to ascii fix to object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = index_1.MsgType.TradeCaptureReport;
    const file = path.join(root, 'trade-capture/object.json');
    const msg = jsonHelper.fromJson(file, msgType);
    const o = yield testEncodeDecode(msgType, msg);
    expect(o).toEqual(msg);
}), 1000);
test('d object to ascii fix to object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = index_1.MsgType.SecurityDefinition;
    const file = path.join(root, 'security-definition/object.json');
    const msg = jsonHelper.fromJson(file, msgType);
    const o = yield testEncodeDecode(msgType, msg);
    expect(o).toEqual(msg);
}), 1000);
test('D object to ascii fix to object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = index_1.MsgType.NewOrderSingle;
    const file = path.join(root, 'new-order-single/object.json');
    const msg = jsonHelper.fromJson(file, msgType);
    const o = yield testEncodeDecode(msgType, msg);
    expect(o).toEqual(msg);
}), 1000);
//# sourceMappingURL=repo-full-ascii-msg.test.js.map