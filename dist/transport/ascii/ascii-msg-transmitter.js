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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsciiMsgTransmitter = void 0;
const ascii_1 = require("../../buffer/ascii");
const msg_transmitter_1 = require("../msg-transmitter");
const tsyringe_1 = require("tsyringe");
const di_tokens_1 = require("../../runtime/di-tokens");
let AsciiMsgTransmitter = class AsciiMsgTransmitter extends msg_transmitter_1.MsgTransmitter {
    constructor(config) {
        super(config.sessionContainer.resolve(di_tokens_1.DITokens.TransmitBuffer), config.definitions, config.description);
        this.config = config;
        this.msgSeqNum = (config.description.LastSentSeqNum || 0) + 1;
        const buffer = this.buffer;
        const tf = new ascii_1.TimeFormatter(buffer);
        this.encoder = new ascii_1.AsciiEncoder(buffer, config.definitions, tf, config.delimiter || ascii_1.AsciiChars.Soh, config.logDelimiter || ascii_1.AsciiChars.Pipe);
        const components = config.definitions.component;
        this.header = components.get('StandardHeader');
        this.trailer = components.get('StandardTrailer');
    }
    checksum() {
        const buffer = this.buffer;
        const encoder = this.encoder;
        let checksum = buffer.sum();
        if (encoder.delimiter !== encoder.logDelimiter) {
            const changes = encoder.tags.nextTagPos;
            checksum -= changes * encoder.logDelimiter;
            checksum += changes * encoder.delimiter;
        }
        checksum = checksum % 256;
        return checksum;
    }
    encodeMessage(msgType, obj) {
        const encoder = this.encoder;
        const factory = this.config.factory;
        let headerProps = {};
        const { StandardHeader } = obj, bodyProps = __rest(obj, ["StandardHeader"]);
        if (StandardHeader) {
            const { BeginString, BodyLength, MsgType, SenderCompID, SendingTime, TargetCompID, TargetSubID } = StandardHeader, hp = __rest(StandardHeader, ["BeginString", "BodyLength", "MsgType", "SenderCompID", "SendingTime", "TargetCompID", "TargetSubID"]);
            headerProps = hp;
            headerProps.OrigSendingTime = SendingTime;
        }
        const sendingTime = this.time || new Date();
        const hdr = factory.header(msgType, this.msgSeqNum, sendingTime, headerProps);
        if (!headerProps.PossDupFlag) {
            this.msgSeqNum++;
        }
        const buffer = this.buffer;
        buffer.reset();
        const msgDef = this.definitions.message.get(msgType);
        if (!msgDef) {
            this.emit('error', new Error(`ascii transmitter cannot find definition for ${msgType}`));
            return;
        }
        encoder.encode(hdr, this.header.name);
        encoder.encode(bodyProps, msgDef.name);
        const lenPos = encoder.bodyLengthPos;
        const bodyLength = Math.max(4, this.config.description.BodyLengthChars || 7);
        const len = buffer.getPos() - encoder.msgTypePos;
        buffer.patchPaddedNumberAtPos(lenPos, len, bodyLength);
        let checksum = this.checksum();
        const trl = factory.trailer(checksum);
        encoder.encode(trl, this.trailer.name);
    }
};
AsciiMsgTransmitter = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(di_tokens_1.DITokens.IJsFixConfig)),
    __metadata("design:paramtypes", [Object])
], AsciiMsgTransmitter);
exports.AsciiMsgTransmitter = AsciiMsgTransmitter;
//# sourceMappingURL=ascii-msg-transmitter.js.map