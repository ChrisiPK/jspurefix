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
exports.MDServer = void 0;
const transport_1 = require("../../../transport");
const types_1 = require("../../../types");
const tsyringe_1 = require("tsyringe");
let MDServer = class MDServer extends transport_1.AsciiSession {
    constructor(config) {
        super(config);
        this.config = config;
        this.timerHandle = null;
        this.logReceivedMsgs = true;
        this.logger = config.logFactory.logger(`${this.me}:MDServer`);
        this.fixLog = config.logFactory.plain(`jsfix.${config.description.application.name}.txt`);
    }
    onApplicationMsg(msgType, view) {
        this.logger.info(`${view.toJson()}`);
        switch (msgType) {
            case types_1.MsgType.MarketDataRequest: {
                const req = view.toObject();
                break;
            }
        }
    }
    onReady(view) {
        this.logger.info('ready for requests.');
    }
    onStopped() {
        this.logger.info('stopped');
        if (this.timerHandle) {
            clearInterval(this.timerHandle);
        }
    }
    onLogon(view, user, password) {
        return true;
    }
    onDecoded(msgType, txt) {
        this.fixLog.info(txt);
    }
    onEncoded(msgType, txt) {
        this.fixLog.info(txt);
    }
};
MDServer = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('IJsFixConfig')),
    __metadata("design:paramtypes", [Object])
], MDServer);
exports.MDServer = MDServer;
//# sourceMappingURL=md-server.js.map