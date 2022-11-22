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
exports.MDClient = void 0;
const transport_1 = require("../../../transport");
const types_1 = require("../../../types");
const md_factory_1 = require("./md-factory");
const tsyringe_1 = require("tsyringe");
const runtime_1 = require("../../../runtime");
let MDClient = class MDClient extends transport_1.AsciiSession {
    constructor(config) {
        super(config);
        this.config = config;
        this.logReceivedMsgs = true;
        this.fixLog = config.logFactory.plain(`jsfix.${config.description.application.name}.txt`);
        this.logger = config.logFactory.logger(`${this.me}:MDClient`);
    }
    onApplicationMsg(msgType, view) {
        this.logger.info(`${view.toJson()}`);
    }
    onStopped() {
        this.logger.info('stopped');
    }
    onDecoded(msgType, txt) {
        this.fixLog.info(txt);
    }
    onEncoded(msgType, txt) {
        this.fixLog.info(txt);
    }
    onReady(view) {
        this.logger.info('ready');
        const logoutSeconds = 32;
        this.logger.info(`will logout after ${logoutSeconds}`);
        const mdr = md_factory_1.MDFactory.BidOfferRequest('EUR/USD');
        this.send(types_1.MsgType.MarketDataRequest, mdr);
        setTimeout(() => {
            this.done();
        }, logoutSeconds * 1000);
    }
    onLogon(view, user, password) {
        return true;
    }
};
MDClient = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(runtime_1.DITokens.IJsFixConfig)),
    __metadata("design:paramtypes", [Object])
], MDClient);
exports.MDClient = MDClient;
//# sourceMappingURL=md-client.js.map