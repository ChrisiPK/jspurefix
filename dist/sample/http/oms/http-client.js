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
exports.HttpClient = void 0;
const fixml_1 = require("../../../transport/fixml");
const oms_factory_1 = require("./oms-factory");
const FIXML50SP2_1 = require("../../../types/FIXML50SP2");
const tsyringe_1 = require("tsyringe");
const runtime_1 = require("../../../runtime");
let HttpClient = class HttpClient extends fixml_1.FixmlSession {
    constructor(config, logoutSeconds = 45) {
        super(config);
        this.config = config;
        this.logoutSeconds = logoutSeconds;
        this.factory = new oms_factory_1.OmsFactory('TradersRUs');
        this.logReceivedMsgs = true;
        this.fixLog = config.logFactory.plain(`jsfix.${config.description.application.name}.txt`);
        this.logger = config.logFactory.logger(`${this.me}`);
    }
    onApplicationMsg(msgType, view) {
        this.logger.info(view.toJson());
        switch (msgType) {
            case 'BizMsgRej': {
                this.logger.warning('received rejection');
                break;
            }
            case 'ExecRpt': {
                const fill = view.toObject();
                this.logger.warning(`received execution report ${fill.OrderQtyData.OrderQty}@${fill.Price}`);
                break;
            }
        }
    }
    onDecoded(msgType, txt) {
        this.fixLog.info(txt);
    }
    onEncoded(msgType, txt) {
        this.fixLog.info(txt);
    }
    onLogon(view, user, password) {
        return true;
    }
    onReady(view) {
        this.logger.info('onReady');
        const logoutSeconds = this.logoutSeconds;
        const req = this.factory.createOrder('IBM', FIXML50SP2_1.Side.Buy, 10000, 100.12);
        this.send('NewOrderSingle', req);
        this.logger.info(`will logout after ${logoutSeconds}`);
        setTimeout(() => {
            this.done();
        }, 11 * 1000);
    }
    onStopped() {
        this.logger.info('stopped');
    }
};
HttpClient = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(runtime_1.DITokens.IJsFixConfig)),
    __param(1, (0, tsyringe_1.inject)('logoutSeconds')),
    __metadata("design:paramtypes", [Object, Number])
], HttpClient);
exports.HttpClient = HttpClient;
//# sourceMappingURL=http-client.js.map