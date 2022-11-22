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
const buffer_1 = require("../../buffer");
const ascii_1 = require("../../buffer/ascii");
const quickfix_1 = require("../../types/FIX4.4/quickfix");
const index_1 = require("../../index");
const setup_1 = require("../env/setup");
let definitions;
let session;
let encoder;
let nos;
let er;
const localDate = new Date(2018, 6, 25);
const utcTimeStamp = new Date(Date.UTC(2018, 5, 10, 16, 35, 0, 246));
const utcDate = new Date(Date.UTC(2018, 5, 10, 0, 0, 0, 0));
const utcTime = new Date(Date.UTC(2018, 0, 1, 16, 35, 0, 246));
let setup;
let buffer;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    setup = new setup_1.Setup('session/qf-fix44.json', null);
    yield setup.init();
    definitions = setup.definitions;
    const config = setup.clientConfig;
    definitions = config.definitions;
    session = setup.client.transmitter;
    buffer = setup.client.txBuffer;
    encoder = session.encoder;
    nos = definitions.message.get('NewOrderSingle');
    er = definitions.message.get('ExecutionReport');
}), 45000);
test('expect a definition ', () => {
    expect(nos).toBeTruthy();
});
function toFix(o, set, enc) {
    const theEncode = enc ? enc : encoder;
    session.buffer.reset();
    if (set) {
        theEncode.encode(o, set.name);
    }
    else {
        theEncode.encode(o, nos.name);
    }
    return session.buffer.toString();
}
function toFixMessage(o, msg) {
    session.encodeMessage(msg.msgType, o);
    return session.buffer.toString();
}
test('encode heartbeat', () => __awaiter(void 0, void 0, void 0, function* () {
    const factory = session.config.factory;
    const hb = factory.heartbeat('test01');
    const hbd = definitions.message.get('Heartbeat');
    const fix = toFixMessage(hb, hbd);
    expect(fix).toBeTruthy();
    const res = yield setup.client.parseText(fix);
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual('0');
    const len = res.view.getTyped(buffer_1.Tags.BodyLengthTag);
    const expected = fix.length - '8=FIX.4.4|9=0000081|'.length - '10=159|'.length;
    expect(len).toEqual(expected);
}));
test('encode custom header PossDupFlag', () => {
    const no = {
        StandardHeader: {
            PossDupFlag: true
        }
    };
    const fix = toFixMessage(no, definitions.message.get('Heartbeat'));
    expect(fix).toMatch('43=Y|');
});
test('encode custom header PossDupFlag', () => {
    const no = {
        StandardHeader: {
            MsgSeqNum: 9999
        }
    };
    const fix = toFixMessage(no, definitions.message.get('Heartbeat'));
    expect(fix).toMatch('34=9999|');
});
test('encode string ClOrdID ', () => {
    const no = {};
    no.ClOrdID = 'Order-a';
    const fix = toFix(no);
    expect(fix).toEqual('11=Order-a|');
});
test('should not encode empty string', () => {
    const no = {};
    no.ClOrdID = '';
    const fix = toFix(no);
    expect(fix).toEqual('');
});
test('should not encode null string', () => {
    const no = {};
    no.ClOrdID = null;
    const fix = toFix(no);
    expect(fix).toEqual('');
});
test('encode +ve numeric (int) Price ', () => {
    const no = {};
    no.Price = 100;
    const fix = toFix(no);
    expect(fix).toEqual('44=100|');
});
test('encode -ve numeric (int) Price ', () => {
    const no = {};
    no.Price = -100;
    const fix = toFix(no);
    expect(fix).toEqual('44=-100|');
});
test('encode +ve numeric (double 8dp) Price ', () => {
    const no = {};
    no.Price = 123.12345678;
    const fix = toFix(no);
    expect(fix).toEqual('44=123.12345678|');
});
test('encode +ve numeric (double 14dp) Price ', () => {
    const no = {};
    no.Price = 123.12345678901234;
    const fix = toFix(no);
    expect(fix).toEqual('44=123.12345678901234|');
});
test('encode -ve numeric (double 14dp) Price ', () => {
    const no = {};
    no.Price = -123.12345678901234;
    const fix = toFix(no);
    expect(fix).toEqual('44=-123.12345678901234|');
});
test('encode +ve string Price ', () => {
    const no = {};
    no.Price = '123.12345678901234';
    const fix = toFix(no);
    expect(fix).toEqual('44=123.12345678901234|');
});
test('encode LocalDate TradeDate ', () => {
    const no = {};
    no.TradeDate = localDate;
    const fix = toFix(no);
    expect(fix).toEqual('75=20180725|');
});
test('encode UTCTIMESTAMP ExpireTime ', () => {
    const no = {};
    no.ExpireTime = utcTimeStamp;
    const fix = toFix(no);
    expect(fix).toEqual('126=20180610-16:35:00.246|');
});
test('encode UTCTIMESTAMP ExpireTime - check padding', () => {
    const no = {};
    no.ExpireTime = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 1));
    const fix = toFix(no);
    expect(fix).toEqual('126=20180101-00:00:00.001|');
});
test('encode UTCDATEONLY MDEntryDate', () => {
    const mdGrp = definitions.component.get('MDFullGrp');
    expect(mdGrp).toBeTruthy();
    const grp = {
        NoMDEntries: [
            {
                MDEntryType: '0',
                MDEntryDate: utcDate
            }
        ]
    };
    const fix = toFix(grp, mdGrp);
    expect(fix).toEqual('268=1|269=0|272=20180610|');
});
test('encode UTCTIMEONLY MDEntryTime', () => {
    const mdGrp = definitions.component.get('MDFullGrp');
    expect(mdGrp).toBeTruthy();
    const grp = {
        NoMDEntries: [
            {
                MDEntryType: '0',
                MDEntryTime: utcTime
            }
        ]
    };
    const fix = toFix(grp, mdGrp);
    expect(fix).toEqual('268=1|269=0|273=16:35:00.246|');
});
function getTCR1() {
    const d0 = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));
    const d1 = new Date(Date.UTC(2018, 11, 2, 0, 0, 0));
    return {
        TradeRequestID: 'all-trades',
        TradeRequestType: quickfix_1.TradeRequestType.AllTrades,
        SubscriptionRequestType: quickfix_1.SubscriptionRequestType.SnapshotPlusUpdates,
        TrdCapDtGrp: {
            NoDates: [
                {
                    TransactTime: d0
                },
                {
                    TransactTime: d1
                }
            ]
        }
    };
}
test('encode TradeCaptureReportRequest with TransactTime', () => {
    const tcr = getTCR1();
    const d = definitions.message.get('TradeCaptureReportRequest');
    const fix = toFix(tcr, d);
    expect(fix).toEqual('568=all-trades|569=0|263=1|580=2|60=20181201-00:00:00.000|60=20181202-00:00:00.000|');
});
test('encode BOOLEAN (true) ReportToExch', () => {
    expect(er).toBeTruthy();
    const e = {};
    e.ReportToExch = true;
    const fix = toFix(e, er);
    expect(fix).toEqual('113=Y|');
});
test('encode BOOLEAN (truthy) ReportToExch', () => {
    expect(er).toBeTruthy();
    const e = {};
    e.ReportToExch = 1;
    const fix = toFix(e, er);
    expect(fix).toEqual('113=Y|');
});
test('encode BOOLEAN (string) ReportToExch', () => {
    expect(er).toBeTruthy();
    const e = {};
    e.ReportToExch = 'TRUE';
    const fix = toFix(e, er);
    expect(fix).toEqual('113=Y|');
});
test('encode BOOLEAN (false) ReportToExch', () => {
    expect(er).toBeTruthy();
    const e = {};
    e.ReportToExch = false;
    const fix = toFix(e, er);
    expect(fix).toEqual('113=N|');
});
test('encode BOOLEAN (falsy) ReportToExch', () => {
    expect(er).toBeTruthy();
    const e = {};
    e.ReportToExch = 0;
    const fix = toFix(e, er);
    expect(fix).toEqual('113=N|');
});
test('encode RawData EncodedText', () => {
    expect(er).toBeTruthy();
    const toEncode = 'this is fix';
    const e = {
        EncodedText: Buffer.alloc(toEncode.length, toEncode, 'utf8')
    };
    const fix = toFix(e, er);
    expect(fix).toEqual('354=11|355=this is fix|');
});
test('encode empty RawData EncodedText', () => {
    expect(er).toBeTruthy();
    const toEncode = '';
    const e = {
        EncodedText: Buffer.alloc(toEncode.length, toEncode, 'utf8')
    };
    const fix = toFix(e, er);
    expect(fix).toEqual('354=0|355=|');
});
function getParties() {
    return {
        'Parties': {
            'NoPartyIDs': [
                {
                    'PartyID': 'magna.',
                    'PartyIDSource': '9',
                    'PartyRole': 28
                },
                {
                    'PartyID': 'iaculis',
                    'PartyIDSource': 'F',
                    'PartyRole': 2
                }
            ]
        }
    };
}
function getPartiesNoPartyID() {
    return {
        'Parties': {
            'NoPartyIDs': [
                {
                    'PartyIDSource': '9',
                    'PartyRole': 28
                }
            ]
        }
    };
}
test('encode repeated group of simple repository Parties', () => {
    expect(er).toBeTruthy();
    const e = getParties();
    const fix = toFix(e, er);
    expect(fix).toEqual('453=2|448=magna.|447=9|452=28|448=iaculis|447=F|452=2|');
});
test('use a carat as log delimiter', () => {
    expect(er).toBeTruthy();
    const caratEncoder = new ascii_1.AsciiEncoder(session.buffer, definitions, new ascii_1.TimeFormatter(session.buffer), ascii_1.AsciiChars.Soh, ascii_1.AsciiChars.Carat);
    const e = getParties();
    const fix = toFix(e, er, caratEncoder);
    expect(fix).toEqual('453=2^448=magna.^447=9^452=28^448=iaculis^447=F^452=2^');
});
test('use a carat as log delimiter with Soh in buffer to show encoding still works', () => {
    expect(er).toBeTruthy();
    const caratEncoder = new ascii_1.AsciiEncoder(session.buffer, definitions, new ascii_1.TimeFormatter(session.buffer), ascii_1.AsciiChars.Soh, ascii_1.AsciiChars.Carat);
    const e = getParties();
    const fix = toFix(e, er, caratEncoder);
    expect(fix).toEqual('453=2^448=magna.^447=9^452=28^448=iaculis^447=F^452=2^');
    const trimmed = caratEncoder.trim().toString();
    expect(trimmed).toEqual('453=2448=magna.447=9452=28448=iaculis447=F452=2');
});
test('encode repeated group with no PartyID - should encode', () => {
    expect(er).toBeTruthy();
    const e = getPartiesNoPartyID();
    const fix = toFix(e, er);
    expect(fix).toEqual('453=1|447=9|452=28|');
});
test('encode repeated group with no array - should throw', () => {
    expect(er).toBeTruthy();
    const e = {
        'Parties': {
            'NoPartyIDs': 'should be an array'
        }
    };
    function run() {
        toFix(e, er);
    }
    expect(run).toThrow(/expected array/);
});
test('encode repeated group with empty array', () => {
    expect(er).toBeTruthy();
    const e = {
        'Parties': {
            'NoPartyIDs': []
        }
    };
    expect(toFix(e, er)).toEqual('453=0|');
});
function getInstrument() {
    return {
        'Instrument': {
            'Symbol': 'ac,',
            'SymbolSfx': 'non',
            'SecurityID': 'Pellentesque',
            'SecurityIDSource': 'B',
            'Product': 2
        }
    };
}
function getInstrumentNestedGroup() {
    return {
        'Instrument': {
            'Symbol': 'ac,',
            'SymbolSfx': 'non',
            'SecurityID': 'Pellentesque',
            'SecurityIDSource': 'B',
            'SecAltIDGrp': {
                'NoSecurityAltID': [
                    {
                        'SecurityAltID': 'lorem',
                        'SecurityAltIDSource': 'consequat'
                    },
                    {
                        'SecurityAltID': 'sapien',
                        'SecurityAltIDSource': 'tempor'
                    }
                ]
            },
            'Product': 2
        }
    };
}
test('encode component', () => {
    expect(er).toBeTruthy();
    const e = getInstrument();
    expect(toFix(e, er)).toEqual('55=ac,|65=non|48=Pellentesque|22=B|460=2|');
});
test('encode component nested group', () => {
    expect(er).toBeTruthy();
    const e = getInstrumentNestedGroup();
    expect(toFix(e, er)).toEqual('55=ac,|65=non|48=Pellentesque|22=B|454=2|455=lorem|456=consequat|455=sapien|456=tempor|460=2|');
});
test('encode group missing delimiter', () => {
    expect(er).toBeTruthy();
    const e = getInstrumentNestedGroup();
    delete e.Instrument.SecAltIDGrp.NoSecurityAltID[0]['SecurityAltID'];
    function run() {
        toFix(e, er);
    }
    expect(run).toThrow(/group instance \[1] inconsisent delimeter 455 expected tag 456/);
});
test('encode group not an array of', () => {
    expect(er).toBeTruthy();
    const e = {
        'Instrument': {
            'Symbol': 'ac,',
            'SymbolSfx': 'non',
            'SecurityID': 'Pellentesque',
            'SecurityIDSource': 'B',
            'SecAltIDGrp': {
                'NoSecurityAltID': {
                    elements: []
                }
            },
            'Product': 2
        }
    };
    function run() {
        toFix(e, er);
    }
    expect(run).toThrow(/expected array instance for group NoSecurityAltID/);
});
function getCompID(securityType) {
    switch (securityType) {
        case quickfix_1.SecurityType.CommonStock: {
            return 'DepA';
        }
        case quickfix_1.SecurityType.CorporateBond: {
            return 'DepB';
        }
        case quickfix_1.SecurityType.ConvertibleBond: {
            return 'DepC';
        }
        default:
            return 'DepD';
    }
}
function createOrder(id, symbol, securityType, side, qty, price) {
    return {
        StandardHeader: {
            DeliverToCompID: getCompID(securityType)
        },
        ClOrdID: `Cli${id}`,
        Account: 'MyAcc',
        Side: side,
        Price: price,
        OrdType: quickfix_1.OrdType.Limit,
        OrderQtyData: {
            OrderQty: qty
        },
        Instrument: {
            SecurityType: securityType,
            Symbol: symbol,
            SecurityID: '459200101',
            SecurityIDSource: quickfix_1.SecurityIDSource.IsinNumber
        },
        TimeInForce: quickfix_1.TimeInForce.Day
    };
}
test('encode custom header 1 - expect DeliverToCompID DepA', () => __awaiter(void 0, void 0, void 0, function* () {
    const type = quickfix_1.SecurityType.CommonStock;
    const o1 = createOrder(1, 'MS', type, quickfix_1.Side.Buy, 100, 1000.0);
    const nosd = definitions.message.get('NewOrderSingle');
    const fix = toFixMessage(o1, nosd);
    expect(fix).toBeTruthy();
    const res = yield setup.client.parseText(fix);
    const tag = res.view.getTyped('DeliverToCompID');
    expect(tag).toEqual('DepA');
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual(index_1.MsgType.NewOrderSingle);
    const parsed = res.view.toObject();
    expect(parsed.StandardHeader.DeliverToCompID).toEqual('DepA');
}));
test('encode custom header 2 - expect DeliverToCompID DepC', () => __awaiter(void 0, void 0, void 0, function* () {
    const type = quickfix_1.SecurityType.ConvertibleBond;
    const o1 = createOrder(1, 'MSCb', type, quickfix_1.Side.Buy, 100, 1000.0);
    const nosd = definitions.message.get('NewOrderSingle');
    const fix = toFixMessage(o1, nosd);
    expect(fix).toBeTruthy();
    const res = yield setup.client.parseText(fix);
    const tag = res.view.getTyped('DeliverToCompID');
    expect(tag).toEqual('DepC');
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual(index_1.MsgType.NewOrderSingle);
    const parsed = res.view.toObject();
    expect(parsed.StandardHeader.DeliverToCompID).toEqual('DepC');
}));
test('encode custom header - include MsgSeqNum (for resends we do not want to overwrite)', () => __awaiter(void 0, void 0, void 0, function* () {
    const type = quickfix_1.SecurityType.ConvertibleBond;
    const seqNum = 10;
    const o1 = createOrder(1, 'MSCb', type, quickfix_1.Side.Buy, 100, 1000.0);
    o1.StandardHeader.MsgSeqNum = seqNum;
    o1.StandardHeader.PossDupFlag = true;
    const nosd = definitions.message.get('NewOrderSingle');
    expect(nosd).toBeTruthy();
    const fix = toFixMessage(o1, nosd);
    expect(fix).toBeTruthy();
    const res = yield setup.client.parseText(fix);
    expect(res.event).toEqual('msg');
    expect(res.msgType).toEqual(index_1.MsgType.NewOrderSingle);
    const parsed = res.view.toObject();
    const h = parsed.StandardHeader;
    expect(h.DeliverToCompID).toEqual('DepC');
    expect(h.MsgSeqNum).toEqual(seqNum);
    expect(h.BeginString).toEqual('FIX.4.4');
    expect(h.PossDupFlag).toEqual(true);
    expect(h.MsgType).toEqual(index_1.MsgType.NewOrderSingle);
}));
//# sourceMappingURL=ascii-encoder.test.js.map