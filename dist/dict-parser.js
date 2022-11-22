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
const path = require("path");
const util_1 = require("./util");
const buffer_1 = require("./buffer");
const ascii_1 = require("./buffer/ascii");
const fixml_1 = require("./buffer/fixml");
const transport_1 = require("./transport");
const types_1 = require("./types");
const config_1 = require("./config");
const FIXML50SP2_1 = require("./types/FIXML50SP2");
const rp = require("request-promise-native");
const compiler_1 = require("./dictionary/compiler");
const ascii_msg_transmitter_1 = require("./transport/ascii/ascii-msg-transmitter");
function testEncodeDecode() {
    return __awaiter(this, void 0, void 0, function* () {
        const msgType = 'W';
        const root = path.join(__dirname, '../');
        const sessionDescription = require('../data/session/test-initiator.json');
        const definitions = yield new util_1.DefinitionFactory().getDefinitions(path.join(root, sessionDescription.application.dictionary));
        const jh = new util_1.JsonHelper(definitions);
        const msg = jh.fromJson(path.join(root, 'data/examples/FIXML/cme/tc/Initial Single Side Submission/fix.xml'), msgType);
        const config = new config_1.JsFixConfig(null, definitions, sessionDescription, ascii_1.AsciiChars.Pipe);
        const session = new ascii_msg_transmitter_1.AsciiMsgTransmitter(config);
        const payload = new transport_1.MsgPayload(msgType, msg);
        const encoderStream = session.encodeStream;
        encoderStream.write(payload);
        session.encodeMessage(msgType, msg);
        const parser = new ascii_1.AsciiParser(config, encoderStream, new buffer_1.ElasticBuffer(160 * 1024));
        const fix = session.buffer.toString();
        console.log(fix);
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            parser.on('msg', (msgType, view) => {
                resolve(view.toObject());
            });
            parser.on('error', (e) => {
                reject(e);
            });
        }));
    });
}
function testGenerator() {
    return __awaiter(this, void 0, void 0, function* () {
        const root = path.join(__dirname, '../');
        const sessionDescription = require('../data/session/test-initiator.json');
        const definitions = yield new util_1.DefinitionFactory().getDefinitions('C:/Users/Stephen/dev/ts/jsfix/data/fix_repo/FIX.4.4/Base');
        const lipsum = yield (0, util_1.getWords)(path.join(root, 'data/examples/lipsum.txt'));
        const generator = new util_1.MessageGenerator(lipsum, definitions);
        const msgType = types_1.MsgType.NewOrderSingle;
        const example = generator.generate(msgType);
        console.log(JSON.stringify(example, null, 4));
        const config = new config_1.JsFixConfig(null, definitions, sessionDescription, ascii_1.AsciiChars.Pipe);
        const session = new ascii_msg_transmitter_1.AsciiMsgTransmitter(config);
        session.encodeMessage(msgType, example);
        const fix = session.buffer.toString();
        const encoderStream = session.encodeStream;
        const payload = new transport_1.MsgPayload(msgType, example);
        encoderStream.write(payload);
        const parser = new ascii_1.AsciiParser(config, encoderStream, new buffer_1.ElasticBuffer(160 * 1024));
        parser.on('msg', (mt, view) => {
            console.log(view.toString());
        });
        console.log(fix);
    });
}
function repository() {
    return __awaiter(this, void 0, void 0, function* () {
        const root = path.join(__dirname, '../');
        const definitions = yield new util_1.DefinitionFactory().getDefinitions('repofixml');
        const file = path.join(root, 'data/examples/FIXML/cme/tc/Delivery Fixed Commodity Swap/');
        const so = definitions.message.get('ExecutionReport');
        const t855 = definitions.simple.get('SecondaryTrdType');
        const reject = {
            Text: `no response`,
            BusinessRejectReason: FIXML50SP2_1.BusinessRejectReason.ApplicationNotAvailable
        };
        const fe = new fixml_1.FixmlEncoder(new buffer_1.ElasticBuffer(), definitions);
        fe.encode(reject, 'BusinessMessageReject');
        const fixml = fe.buffer.toString();
        const jh = new util_1.JsonHelper(definitions);
        const fs = require('fs');
        let readStream = fs.createReadStream(`${file}/fix.xml`);
        const sessionDescription = require('../data/session/test-initiator.json');
        const config = new config_1.JsFixConfig(null, definitions, sessionDescription, ascii_1.AsciiChars.Pipe);
        const xmlParser = new fixml_1.FiXmlParser(config, readStream);
        xmlParser.on('batch', (msgType, v) => {
            console.log(`received message ${msgType}`);
            const o = v.toObject();
            console.log(JSON.stringify(o, null, 4));
            const fe = new fixml_1.FixmlEncoder(new buffer_1.ElasticBuffer(), definitions);
            fe.encode(o, msgType);
            const fixml = fe.buffer.toString();
            console.log(fixml);
            console.log(v.toString());
        });
        xmlParser.on('msg', (msgType, v) => {
            console.log(`received message ${msgType}`);
            const o = v.toObject();
            console.log(JSON.stringify(o, null, 4));
            console.log(v.toString());
            const fe = new fixml_1.FixmlEncoder(new buffer_1.ElasticBuffer(), definitions);
            fe.encode(o, msgType);
            const fixml = fe.buffer.toString();
            console.log(fixml);
        });
    });
}
function runTest() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((accept, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield testGenerator();
                accept(res);
            }
            catch (e) {
                console.log(e.message);
                reject(e);
            }
        }));
    });
}
function streamExample() {
    const fs = require('fs');
    const root = path.join(__dirname, '../');
    const file = path.join(root, 'data/examples/FIXML/cme/Claiming Firm Requests Sub-allocation with Allocation Instructions/');
    let readStream = fs.createReadStream(`${file}/fix.xml`);
    const Writable = require('stream').Writable;
    const receiver = new Writable({
        write: (data, _, done) => {
            console.log('receive ' + data);
            done();
        }
    });
    readStream.pipe(receiver).on('finish', () => {
        console.log('done');
    });
}
function compileDefinitions(definitionPath, outputPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const definitions = yield new util_1.DefinitionFactory().getDefinitions(definitionPath);
        const compilerSettings = require('../data/compiler.json');
        compilerSettings.output = outputPath;
        const msgCompiler = new compiler_1.MsgCompiler(definitions, compilerSettings);
        yield msgCompiler.generate();
        const enumCompiler = new compiler_1.EnumCompiler(definitions, compilerSettings);
        const writeFile = path.join(compilerSettings.output, './enum/all-enum.ts');
        yield enumCompiler.generate(writeFile);
        const writeFileTypes = path.join(compilerSettings.output, './enum/msg-type.ts');
        yield enumCompiler.generate(writeFile);
    });
}
function compiler() {
    return __awaiter(this, void 0, void 0, function* () {
        yield compileDefinitions('data/fix_repo/fixmlschema_FIX.5.0SP2_EP228', 'C:/Users/Stephen/dev/ts/jsfix/src/types/FIXML50SP2');
    });
}
function generateMessage() {
    return __awaiter(this, void 0, void 0, function* () {
        yield testGenerator();
    });
}
function decode() {
    return __awaiter(this, void 0, void 0, function* () {
        const definitions = yield new util_1.DefinitionFactory().getDefinitions('data/fix_repo/FIX.4.4/Base');
        const txt = '8=FIX4.4|9=0001022|35=AE|49=init-comp|56=accept-comp|34=1|57=fix|52=20180909-14:22:09.841|571=Lorem|487=23513|856=1|568=ipsum|828=6|855=23619|830=dolor|150=F|748=17140|912=N|325=N|263=1|881=sit|818=amet,|820=consectetur|880=adipiscing|17=elit.|39=3|527=Nunc|570=N|423=8|55=odio|65=orci,|48=blandit|22=3|460=4|461=vel|167=MPT|762=semper|200=sed,|541=20180909|201=0|224=20180909|225=20180909|227=-8796.1|228=-23.537|255=bibendum|543=cursus|470=lectus.|471=Aenean|472=vel|240=20180909|202=891.7|947=-2928.1|231=5.7237|223=-1894.1|106=diam|348=9|349=6YYz0zu5s|350=8|351=TuH3tTNd|691=magna.|667=Aenean|875=99|876=et|873=20180909|874=20180909|913=viverra|914=leo,|915=20180909|916=20180909|919=0|898=0.5594|38=96682|152=19226|516=9.1251|854=0|235=PREVCLOSE|236=-2833.5|701=20180909|696=20180909|697=-6.095|698=26303|823=non|32=9253|31=2065.4|194=-73.233|30=iaculis|75=20180909|715=20180909|6=5.9279|218=0.0001953|221=neque.|222=Nullam|663=16216|699=arcu|761=lectus,|824=dignissim|63=3|64=20180909|573=0|574=M3|797=Y|852=Y|853=3|10=16|';
        const startsAt = new Date();
        const sessionDescription = require('../data/session/test-initiator.json');
        const config = new config_1.JsFixConfig(null, definitions, sessionDescription, ascii_1.AsciiChars.Pipe);
        let i = 0;
        const repeats = 1;
        const asciiParser = new ascii_1.AsciiParser(config, new transport_1.StringDuplex(txt.repeat(repeats)).readable, new buffer_1.ElasticBuffer(160 * 1024));
        asciiParser.on('msg', (msgType, v) => {
            ++i;
            console.log(v.toJson());
            if (i === repeats) {
                const elapsed = new Date().getTime() - startsAt.getTime();
                console.log(`elapsed ms ${elapsed} ${(elapsed / repeats) * 1000} micros per msg`);
            }
        });
    });
}
function http() {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionDescription = require('../data/session/test-http-acceptor.json');
        const definitions = yield new util_1.DefinitionFactory().getDefinitions(sessionDescription.application.dictionary);
        const logFactory = new config_1.JsFixWinstonLogFactory(config_1.WinstonLogger.consoleOptions('info'));
        const config = new config_1.JsFixConfig(null, definitions, sessionDescription, ascii_1.AsciiChars.Pipe, logFactory);
        const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<FIXML v="5.0 SP2" s="20090815" xv="109" cv="CME.0001">\n' +
            '    <UserReq UserReqID="123456" UserReqTyp="1" Username="user123" Password="User!Pass5">\n' +
            '        <Hdr SID="BRKR" SSub="user123" TID="CME" TSub="CPAPI"/>\n' +
            '    </UserReq>\n' +
            '</FIXML>';
        rp({
            method: 'POST',
            uri: 'http://localhost:2343/session',
            body: {
                fixml: xml
            },
            json: true
        }).then(function (parsedBody) {
            console.log(parsedBody);
        })
            .catch((err) => {
            console.log(err);
        });
    });
}
repository();
//# sourceMappingURL=dict-parser.js.map