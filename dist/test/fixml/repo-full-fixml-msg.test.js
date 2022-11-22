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
const transport_1 = require("../../transport");
const config_1 = require("../../config");
const buffer_1 = require("../../buffer");
const ascii_1 = require("../../buffer/ascii");
const fixml_1 = require("../../buffer/fixml");
const util_1 = require("../../util");
const setup_1 = require("../env/setup");
let definitions;
let jsonHelper;
let sessionDescription;
const root = path.join(__dirname, '../../../data/examples/FIXML');
let setup = null;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    setup = new setup_1.Setup('session/test-initiator.json', null);
    yield setup.init();
    sessionDescription = setup.client.description;
    definitions = yield new util_1.DefinitionFactory().getDefinitions('repofixml');
    jsonHelper = new util_1.JsonHelper(definitions);
}), 45000);
function testEncodeDecode(asObj, msgType) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const fe = new fixml_1.FixmlEncoder(new buffer_1.ElasticBuffer(), definitions);
            fe.encode(asObj, msgType);
            const fixml = fe.buffer.toString();
            const config = new config_1.JsFixConfig(null, definitions, sessionDescription, ascii_1.AsciiChars.Pipe);
            const xmlParser = new fixml_1.FiXmlParser(config, new transport_1.StringDuplex(fixml).readable);
            if (asObj.Batch) {
                xmlParser.on('batch', (msgType, v) => {
                    const o = v.toObject();
                    resolve(o);
                });
            }
            else {
                xmlParser.on('msg', (msgType, v) => {
                    const o = v.toObject();
                    resolve(o);
                });
            }
            xmlParser.on('error', (e) => {
                reject(e);
            });
        }));
    });
}
test('MktDataFull settle fixml object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = 'MktDataFull';
    const file = path.join(root, 'cme/md/settle');
    const asObj = jsonHelper.fromJson(`${file}/object.json`, msgType);
    const o = yield testEncodeDecode(asObj, msgType);
    expect(o).toEqual(asObj);
}), 1000);
test('AllocInstrctn fixml object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = 'AllocInstrctn';
    const file = path.join(root, 'cme/alloc/Claiming Firm Requests Sub-allocation with Allocation Instructions/');
    const asObj = jsonHelper.fromJson(`${file}/object.json`, msgType);
    const o = yield testEncodeDecode(asObj, msgType);
    expect(o).toEqual(asObj);
}), 1000);
test('AllocRpt fixml object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = 'AllocRpt';
    const file = path.join(root, 'cme/alloc/Clearing System Notifies Allocation to the Claiming Firm - Cross-Exchange/');
    const asObj = jsonHelper.fromJson(`${file}/object.json`, msgType);
    const o = yield testEncodeDecode(asObj, msgType);
    expect(o).toEqual(asObj);
}), 1000);
test('TrdCaptRpt fixml object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = 'TrdCaptRpt';
    const file = path.join(root, 'cme/tc/Delivery Fixed Commodity Swap');
    const asObj = jsonHelper.fromJson(`${file}/object.json`, msgType);
    const o = yield testEncodeDecode(asObj, msgType);
    expect(o).toEqual(asObj);
}), 1000);
test('MktDataFull fixml object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = 'MktDataFull';
    const file = path.join(root, 'cme/md/futures');
    const asObj = jsonHelper.fromJson(`${file}/object.json`, msgType);
    const o = yield testEncodeDecode(asObj, msgType);
    expect(o).toEqual(asObj);
}), 1000);
test('UserReq logon fixml object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = 'UserReq';
    const file = path.join(root, 'cme/ur/logon');
    const asObj = jsonHelper.fromJson(`${file}/object.json`, msgType);
    const o = yield testEncodeDecode(asObj, msgType);
    expect(o).toEqual(asObj);
}), 1000);
test('UserReq logoff fixml object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = 'UserReq';
    const file = path.join(root, 'cme/ur/logoff');
    const asObj = jsonHelper.fromJson(`${file}/object.json`, msgType);
    const o = yield testEncodeDecode(asObj, msgType);
    expect(o).toEqual(asObj);
}), 1000);
test('TrdCaptRpt 2 fixml object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = 'TrdCaptRpt';
    const file = path.join(root, 'cme/tc/Initial Single Side Submission');
    const asObj = jsonHelper.fromJson(`${file}/object.json`, msgType);
    const o = yield testEncodeDecode(asObj, msgType);
    expect(o).toEqual(asObj);
}), 1000);
test('TrdCaptRpt 3 fixml object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = 'TrdCaptRpt';
    const file = path.join(root, 'cme/tc/Accepted Unmatched');
    const asObj = jsonHelper.fromJson(`${file}/object.json`, msgType);
    const o = yield testEncodeDecode(asObj, msgType);
    expect(o).toEqual(asObj);
}), 1000);
test('TrdCaptRptReq fixml object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = 'TrdCaptRptReq';
    const file = path.join(root, 'cme/tc/Trading Firm Continued Subscription');
    const asObj = jsonHelper.fromJson(`${file}/object.json`, msgType);
    const o = yield testEncodeDecode(asObj, msgType);
    expect(o).toEqual(asObj);
}), 1000);
test('Order fixml object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = 'Order';
    const file = path.join(root, 'om/nso');
    const asObj = jsonHelper.fromJson(`${file}/object.json`, msgType);
    const o = yield testEncodeDecode(asObj, msgType);
    expect(o).toEqual(asObj);
}), 1000);
test('ExecRpt fixml object', () => __awaiter(void 0, void 0, void 0, function* () {
    const msgType = 'ExecRpt';
    const file = path.join(root, 'om/er');
    const asObj = jsonHelper.fromJson(`${file}/object.json`, msgType);
    const o = yield testEncodeDecode(asObj, msgType);
    expect(o).toEqual(asObj);
}), 1000);
//# sourceMappingURL=repo-full-fixml-msg.test.js.map