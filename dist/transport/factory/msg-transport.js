"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgTransport = void 0;
const duplex_1 = require("../duplex");
const di_tokens_1 = require("../../runtime/di-tokens");
const tsyringe_1 = require("tsyringe");
let MsgTransport = class MsgTransport {
    constructor(id, config, duplex) {
        this.id = id;
        this.config = config;
        this.duplex = duplex;
        const delimiter = config.delimiter;
        if (!delimiter) {
            throw new Error(`no delimiter char given.`);
        }
        const sessionContainer = this.config.sessionContainer;
        sessionContainer.registerInstance(di_tokens_1.DITokens.readStream, this.duplex.readable);
        this.transmitter = sessionContainer.resolve(di_tokens_1.DITokens.MsgTransmitter);
        this.receiver = sessionContainer.resolve(di_tokens_1.DITokens.MsgParser);
        if (duplex.writable) {
            this.transmitter.encodeStream.pipe(duplex.writable);
        }
    }
    end() {
        this.duplex.end();
    }
    wait() {
        return new Promise((resolve, reject) => {
            this.receiver.on('end', () => {
                resolve(this.id);
            });
            this.receiver.on('error', (e) => {
                reject(e);
            });
            this.transmitter.on('error', (e) => {
                reject(e);
            });
        });
    }
};
MsgTransport = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(di_tokens_1.DITokens.sessionId)),
    __param(1, (0, tsyringe_1.inject)(di_tokens_1.DITokens.IJsFixConfig)),
    __param(2, (0, tsyringe_1.inject)(di_tokens_1.DITokens.FixDuplex)),
    __metadata("design:paramtypes", [Number, Object, duplex_1.FixDuplex])
], MsgTransport);
exports.MsgTransport = MsgTransport;
//# sourceMappingURL=msg-transport.js.map