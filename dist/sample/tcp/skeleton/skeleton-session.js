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
exports.SkeletonSession = void 0;
const transport_1 = require("../../../transport");
const store_1 = require("../../../store");
const tsyringe_1 = require("tsyringe");
const runtime_1 = require("../../../runtime");
let SkeletonSession = class SkeletonSession extends transport_1.AsciiSession {
    constructor(config, logoutSeconds, useInMemoryStore) {
        super(config);
        this.config = config;
        this.logoutSeconds = logoutSeconds;
        this.useInMemoryStore = useInMemoryStore;
        this.logReceivedMsgs = true;
        this.fixLog = config.logFactory.plain(`jsfix.${config.description.application.name}.txt`);
        this.logger = config.logFactory.logger(`${this.me}`);
    }
    onApplicationMsg(msgType, view) {
        if (this.useInMemoryStore) {
            const rec = store_1.FixMsgStoreRecord.toMsgStoreRecord(view);
            this.store.put(rec).then(r => {
                this.logger.info(`store state ${JSON.stringify(r, null, 4)}`);
                this.dispatch(msgType, view);
            }).catch(e => {
                this.logger.error(e);
            });
        }
        else {
            this.dispatch(msgType, view);
        }
    }
    dispatch(msgType, view) {
        const o = view.toObject();
        switch (msgType) {
            default: {
                this.logger.info(`received message type ${msgType} ${JSON.stringify(o, null, 4)}`);
                break;
            }
        }
    }
    sendMessage(msgType, obj) {
        this.send(msgType, obj);
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
        const t = this.config.description.application.type;
        switch (t) {
            case 'initiator': {
                this.logger.info(`will logout after ${logoutSeconds}`);
                setTimeout(() => {
                    this.done();
                }, logoutSeconds * 1000);
                break;
            }
            case 'acceptor': {
                this.logger.info(`acceptor is ready for requests`);
                break;
            }
            default: {
                this.logger.warning(`unknown type ${t}`);
                break;
            }
        }
    }
    onStopped() {
        this.logger.info('stopped');
    }
};
SkeletonSession = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(runtime_1.DITokens.IJsFixConfig)),
    __param(1, (0, tsyringe_1.inject)('logoutSeconds')),
    __param(2, (0, tsyringe_1.inject)('useInMemoryStore')),
    __metadata("design:paramtypes", [Object, Number, Boolean])
], SkeletonSession);
exports.SkeletonSession = SkeletonSession;
//# sourceMappingURL=skeleton-session.js.map