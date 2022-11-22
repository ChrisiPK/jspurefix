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
const setup_1 = require("../env/setup");
const segment_type_1 = require("../../buffer/segment/segment-type");
const root = path.join(__dirname, '../../../data');
let definitions;
let views;
let structure;
let setup = null;
const asStrings = [
    'FIX4.4',
    '0000208',
    'A',
    'sender-10',
    'target-20',
    '1',
    'sub-a',
    '20180610-10:39:01.621',
    '2',
    '62441',
    '20',
    'VgfoSqo56NqSVI1fLdlI',
    'Y',
    '4886',
    '20',
    '1',
    'ipsum',
    'R',
    'N',
    'sit',
    'consectetur',
    '49'
];
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    setup = new setup_1.Setup('session/qf-fix44.json', null);
    yield setup.init();
    definitions = setup.client.config.definitions;
    views = yield setup.client.replayer.replayFixFile(path.join(root, 'examples/FIX.4.4/quickfix/logon/fix.txt'));
    if (views && views.length > 0) {
        structure = views[0].structure;
    }
}), 45000);
test('expect a structure from fix msg', () => {
    expect(structure).toBeTruthy();
});
test('Logon structure', () => {
    const logon = structure.layout.Logon;
    expect(logon).toBeTruthy();
    expect(logon.type).toEqual(segment_type_1.SegmentType.Msg);
    expect(logon.startPosition).toEqual(0);
    expect(logon.startTag).toEqual(8);
    expect(logon.endPosition).toEqual(21);
    expect(logon.endTag).toEqual(10);
});
test('Logon MsgTypes', () => {
    const msgTypes = structure.layout.NoMsgTypes;
    expect(msgTypes).toBeTruthy();
    expect(msgTypes.type).toEqual(segment_type_1.SegmentType.Group);
    expect(msgTypes.delimiterTag).toEqual(372);
    expect(msgTypes.delimiterPositions.length).toEqual(1);
    expect(msgTypes.delimiterPositions).toEqual([16]);
});
test('Logon Object', () => {
    const logonAsObject = views[0].toObject();
    expect(logonAsObject).toBeTruthy();
    expect(logonAsObject.Username).toEqual('sit');
    expect(logonAsObject.Password).toEqual('consectetur');
    expect(logonAsObject.NoMsgTypes).toEqual([
        {
            MsgDirection: 'R',
            RefMsgType: 'ipsum'
        }
    ]);
});
test('values as strings', () => {
    const view = views[0];
    const strings = view.getStrings();
    expect(strings).toEqual(asStrings);
});
//# sourceMappingURL=logon.test.js.map