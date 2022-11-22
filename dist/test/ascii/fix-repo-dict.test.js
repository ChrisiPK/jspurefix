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
const util_1 = require("../../util");
const contained_1 = require("../../dictionary/contained");
const root = path.join(__dirname, '../../../data');
let definitions;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    const sessionDescription = require(path.join(root, 'session/test-initiator.json'));
    definitions = yield new util_1.DefinitionFactory().getDefinitions(sessionDescription.application.dictionary);
}), 45000);
test('field check tag 1', () => {
    const simple = definitions.simple.get('1');
    expect(simple).toBeTruthy();
    expect(simple.tag).toEqual(1);
    expect(simple.name).toEqual('Account');
    expect(simple.type.toLowerCase()).toEqual('string');
});
test('field check tag 15', () => {
    const simple = definitions.simple.get('15');
    expect(simple).toBeTruthy();
    expect(simple.tag).toEqual(15);
    expect(simple.name).toEqual('Currency');
    expect(simple.type.toLowerCase()).toEqual('string');
});
test('field check tag 35', () => {
    const simple = definitions.simple.get('35');
    expect(simple).toBeTruthy();
    expect(simple.tag).toEqual(35);
    expect(simple.name).toEqual('MsgType');
    expect(simple.type.toLowerCase()).toEqual('string');
    expect(simple.enums).toBeTruthy();
    expect(simple.enums.get('ZZZ')).toBeUndefined();
    expect(simple.enums.get('0').val).toEqual('Heartbeat');
    expect(simple.enums.get('8').val).toEqual('ExecutionReport');
    expect(simple.enums.get('AE').val).toEqual('TradeCaptureReport');
});
test('field check tag 54', () => {
    const simple = definitions.simple.get('54');
    expect(simple).toBeTruthy();
    expect(simple.tag).toEqual(54);
    expect(simple.name).toEqual('Side');
    expect(simple.type.toLowerCase()).toEqual('char');
    expect(simple.enums).toBeTruthy();
    expect(simple.enums.get('1').val).toEqual('Buy');
    expect(simple.enums.get('2').val).toEqual('Sell');
    expect(simple.enums.get('3').val).toEqual('BuyMinus');
    expect(simple.enums.get('8').val).toEqual('Cross');
});
test('field check tag 99', () => {
    const simple = definitions.simple.get('99');
    expect(simple).toBeTruthy();
    expect(simple.tag).toEqual(99);
    expect(simple.name).toEqual('StopPx');
    expect(simple.type.toLowerCase()).toEqual('float');
});
test('field check tag 113', () => {
    const simple = definitions.simple.get('113');
    expect(simple).toBeTruthy();
    expect(simple.tag).toEqual(113);
    expect(simple.name).toEqual('ReportToExch');
    expect(simple.type.toLowerCase()).toEqual('boolean');
});
test('field check tag 119', () => {
    const simple = definitions.simple.get('119');
    expect(simple).toBeTruthy();
    expect(simple.tag).toEqual(119);
    expect(simple.name).toEqual('SettlCurrAmt');
    expect(simple.type.toLowerCase()).toEqual('float');
});
test('field check tag 135', () => {
    const simple = definitions.simple.get('135');
    expect(simple).toBeTruthy();
    expect(simple.tag).toEqual(135);
    expect(simple.name).toEqual('OfferSize');
    expect(simple.type.toLowerCase()).toEqual('float');
});
test('field check tag 168', () => {
    const simple = definitions.simple.get('168');
    expect(simple).toBeTruthy();
    expect(simple.tag).toEqual(168);
    expect(simple.name).toEqual('EffectiveTime');
    expect(simple.type.toLowerCase()).toEqual('utctimestamp');
});
test('field check tag 95', () => {
    const simple = definitions.simple.get('95');
    expect(simple).toBeTruthy();
    expect(simple.tag).toEqual(95);
    expect(simple.name).toEqual('RawDataLength');
    expect(simple.type.toLowerCase()).toEqual('int');
});
test('field check tag 96', () => {
    const simple = definitions.simple.get('96');
    expect(simple).toBeTruthy();
    expect(simple.tag).toEqual(96);
    expect(simple.name).toEqual('RawData');
    expect(simple.type.toLowerCase()).toEqual('data');
});
test('field check tag 100', () => {
    const simple = definitions.simple.get('100');
    expect(simple).toBeTruthy();
    expect(simple.tag).toEqual(100);
    expect(simple.name).toEqual('ExDestination');
    expect(simple.type.toLowerCase()).toEqual('string');
});
test('message check TestRequest', () => {
    const msg = definitions.message.get('TestRequest');
    expect(msg).toBeTruthy();
    expect(msg.msgType).toEqual('1');
    expect(msg.fields.length).toEqual(3);
    expect(msg.fields[0].type).toEqual(contained_1.ContainedFieldType.Component);
    expect(msg.fields[0].name).toEqual('StandardHeader');
    expect(msg.fields[1].type).toEqual(contained_1.ContainedFieldType.Simple);
    expect(msg.fields[1].name).toEqual('TestReqID');
    expect(msg.fields[2].type).toEqual(contained_1.ContainedFieldType.Component);
    expect(msg.fields[2].name).toEqual('StandardTrailer');
});
//# sourceMappingURL=fix-repo-dict.test.js.map