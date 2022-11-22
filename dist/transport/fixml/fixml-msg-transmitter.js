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
exports.FixmlMsgTransmitter = void 0;
const msg_transmitter_1 = require("../msg-transmitter");
const tsyringe_1 = require("tsyringe");
const di_tokens_1 = require("../../runtime/di-tokens");
let FixmlMsgTransmitter = class FixmlMsgTransmitter extends msg_transmitter_1.MsgTransmitter {
    constructor(config) {
        super(config.sessionContainer.resolve(di_tokens_1.DITokens.TransmitBuffer), config.definitions, config.description);
        this.config = config;
        this.encoder = config.sessionContainer.resolve(di_tokens_1.DITokens.MsgEncoder);
    }
    encodeMessage(msgType, obj) {
        const adapter = this.config.description.application.http.adapter;
        if (adapter) {
            adapter.beginMessage(msgType);
        }
        const fe = this.encoder;
        const factory = this.config.factory;
        obj.StandardHeader = factory.header();
        fe.encode(obj, msgType);
    }
};
FixmlMsgTransmitter = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(di_tokens_1.DITokens.IJsFixConfig)),
    __metadata("design:paramtypes", [Object])
], FixmlMsgTransmitter);
exports.FixmlMsgTransmitter = FixmlMsgTransmitter;
//# sourceMappingURL=fixml-msg-transmitter.js.map