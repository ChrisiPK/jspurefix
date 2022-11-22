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
const util_1 = require("../../util");
const index_1 = require("../../index");
const setup_1 = require("../env/setup");
let definitions;
let jsonHelper;
const logon = '8=FIX4.4|9=0000208|35=A|49=sender-10|56=target-20|34=1|57=sub-a|52=20180610-10:39:01.621|98=2|108=62441|95=20|96=VgfoSqo56NqSVI1fLdlI|141=Y|789=4886|383=20|384=1|372=ipsum|385=R|464=N|553=sit|554=consectetur|10=49|';
let config;
let setup = null;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    setup = new setup_1.Setup();
    yield setup.init();
    definitions = setup.definitions;
    jsonHelper = new util_1.JsonHelper(definitions);
    config = setup.clientConfig;
}), 45000);
test('0 gaps', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield setup.client.parseText(logon);
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual(index_1.MsgType.Logon);
    const unknowns = res.view.structure.layout['.undefined'];
    expect(unknowns).toBeFalsy();
    const o = res.view.toObject();
    expect(o).toBeTruthy();
    expect(o.Password).toEqual('consectetur');
    expect(o.Username).toEqual('sit');
}));
test('1 gap', () => __awaiter(void 0, void 0, void 0, function* () {
    const gap = logon.replace('108=62441|', '108=62441|9999=im not here');
    const res = yield setup.client.parseText(gap);
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual(index_1.MsgType.Logon);
    const unknown = res.view.structure.layout['.undefined'];
    expect(unknown).toBeTruthy();
    expect(unknown.startTag).toEqual(9999);
    expect(unknown.startPosition).toEqual(10);
    const o = res.view.toObject();
    expect(o).toBeTruthy();
    expect(o.Password).toEqual('consectetur');
    expect(o.Username).toEqual('sit');
}));
test('1 gap next to 1 gap', () => __awaiter(void 0, void 0, void 0, function* () {
    const gap = logon.replace('108=62441|', '108=62441|1=gap|2=gap|');
    const res = yield setup.client.parseText(gap);
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual(index_1.MsgType.Logon);
    const unknowns = res.view.structure.layout['.undefined'];
    expect(unknowns).toBeTruthy();
    expect(Array.isArray(unknowns)).toEqual(true);
    expect(unknowns[0].startTag).toEqual(1);
    expect(unknowns[0].startPosition).toEqual(10);
    expect(unknowns[1].startTag).toEqual(2);
    expect(unknowns[1].startPosition).toEqual(11);
    const o = res.view.toObject();
    expect(o).toBeTruthy();
    expect(o.Password).toEqual('consectetur');
    expect(o.Username).toEqual('sit');
}));
test('1 gap undefined msg', () => __awaiter(void 0, void 0, void 0, function* () {
    const gap = logon.replace('108=62441|', '108=62441|9999=im not here');
    const res = yield setup.client.parseText(gap);
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual(index_1.MsgType.Logon);
    expect(res.view.getUndefined()).toBeTruthy();
    expect(res.view.undefinedForMsg()).toEqual('undefined tag = 9999');
}));
test('2 gap undefined msg', () => __awaiter(void 0, void 0, void 0, function* () {
    const gap = logon.replace('108=62441|', '108=62441|1=gap|2=gap|');
    const res = yield setup.client.parseText(gap);
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual(index_1.MsgType.Logon);
    expect(res.view.getUndefined()).toBeTruthy();
    expect(res.view.undefinedForMsg()).toEqual('undefined tags = 1, 2');
}));
//# sourceMappingURL=ascii-segment.test.js.map