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
exports.Setup = exports.TestEntity = void 0;
const di_tokens_1 = require("../../runtime/di-tokens");
const runtime_1 = require("../../runtime");
const transport_1 = require("../../transport");
const path = require("path");
const util_1 = require("../../util");
const ascii_1 = require("../../buffer/ascii");
const parsing_result_1 = require("./parsing-result");
const root = path.join(__dirname, '../../../data');
class TestEntity {
    constructor(sessionPath) {
        this.sessionPath = sessionPath;
        this.fixContainer = new runtime_1.SessionContainer();
        this.description = require(path.join(root, this.sessionPath));
    }
    getViews(fix = 'examples/FIX.4.4/fix.txt') {
        return __awaiter(this, void 0, void 0, function* () {
            return this.replayer.replayFixFile(path.join(root, fix));
        });
    }
    getAsciiParser(text, chunks = false) {
        return new ascii_1.AsciiParser(this.config, new transport_1.StringDuplex(text, chunks).readable, this.rxBuffer);
    }
    parseText(text, chunks = false) {
        return new Promise((resolve, reject) => {
            const parser = this.getAsciiParser(text, chunks);
            parser.on('error', (e) => {
                reject(e);
            });
            parser.on('msg', (msgType, view) => {
                resolve(new parsing_result_1.ParsingResult('msg', msgType, view.clone(), parser.state.elasticBuffer.toString(), parser));
            });
            parser.on('done', () => {
                resolve(new parsing_result_1.ParsingResult('done', null, null, parser.state.elasticBuffer.toString(), parser));
            });
        });
    }
    make() {
        return __awaiter(this, void 0, void 0, function* () {
            this.fixContainer.reset();
            this.fixContainer.registerGlobal('error');
            this.sessionContainer = yield this.fixContainer.makeSystem(this.description);
            const container = this.sessionContainer;
            this.config = container.resolve(di_tokens_1.DITokens.IJsFixConfig);
            this.config.delimiter = this.config.logDelimiter;
            this.replayer = new util_1.FileReplayer(this.config);
            this.sessionMsgFactory = container.resolve(di_tokens_1.DITokens.ISessionMsgFactory);
            if (container.isRegistered(di_tokens_1.DITokens.ParseBuffer)) {
                this.rxBuffer = container.resolve(di_tokens_1.DITokens.ParseBuffer);
            }
            if (container.isRegistered(di_tokens_1.DITokens.TransmitBuffer)) {
                this.txBuffer = container.resolve(di_tokens_1.DITokens.TransmitBuffer);
            }
            if (container.isRegistered(di_tokens_1.DITokens.MsgTransmitter)) {
                this.transmitter = container.resolve(di_tokens_1.DITokens.MsgTransmitter);
            }
        });
    }
}
exports.TestEntity = TestEntity;
class Setup {
    constructor(clientPath = 'session/test-initiator.json', serverPath = 'session/test-acceptor.json') {
        this.clientPath = clientPath;
        this.serverPath = serverPath;
        this.client = new TestEntity(clientPath);
        if (serverPath) {
            this.server = new TestEntity(serverPath);
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.client) {
                yield this.client.make();
                this.definitions = this.client.config.definitions;
                this.clientConfig = this.client.config;
                this.clientSessionContainer = this.client.sessionContainer;
                this.clientDescription = this.client.description;
            }
            if (this.server) {
                yield this.server.make();
                this.serverConfig = this.server.config;
            }
        });
    }
}
exports.Setup = Setup;
//# sourceMappingURL=setup.js.map