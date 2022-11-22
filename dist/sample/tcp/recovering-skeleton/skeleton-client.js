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
exports.SkeletonClient = void 0;
const transport_1 = require("../../../transport");
const tsyringe_1 = require("tsyringe");
let SkeletonClient = class SkeletonClient extends transport_1.AsciiSession {
    constructor(config, logoutSeconds) {
        super(config);
        this.config = config;
        this.logoutSeconds = logoutSeconds;
        this.logReceivedMsgs = true;
        this.fixLog = config.logFactory.plain(`jsfix.${config.description.application.name}.txt`);
        this.logger = config.logFactory.logger(`${this.me}`);
    }
    onApplicationMsg(msgType, view) {
        switch (msgType) {
            default: {
                this.logger.info(`received message type ${msgType}`);
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
        this.logger.info(`peer logs in user ${user}`);
        return true;
    }
    onReady(view) {
        this.logger.info('onReady');
        const logoutSeconds = this.logoutSeconds;
        this.logger.info(`will logout after ${logoutSeconds}`);
        setTimeout(() => {
            this.done();
        }, logoutSeconds * 1000);
    }
    onStopped() {
        this.logger.info('stopped');
    }
};
SkeletonClient = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('IJsFixConfig')),
    __param(1, (0, tsyringe_1.inject)('logoutSeconds')),
    __metadata("design:paramtypes", [Object, Number])
], SkeletonClient);
exports.SkeletonClient = SkeletonClient;
//# sourceMappingURL=skeleton-client.js.map