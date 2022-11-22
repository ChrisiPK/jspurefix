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
exports.TcpInitiatorConnector = void 0;
const tcp_initiator_1 = require("./tcp-initiator");
const tsyringe_1 = require("tsyringe");
const di_tokens_1 = require("../../runtime/di-tokens");
const fix_entity_1 = require("../fix-entity");
let TcpInitiatorConnector = class TcpInitiatorConnector extends fix_entity_1.FixEntity {
    constructor(config) {
        super(config);
        this.config = config;
    }
    start(reconnectTimeout = 0) {
        return new Promise((accept, reject) => __awaiter(this, void 0, void 0, function* () {
            const logger = this.config.logFactory.logger('initiator');
            const sessionContainer = this.config.sessionContainer;
            if (!sessionContainer.isRegistered(di_tokens_1.DITokens.FixSession)) {
                reject(new Error(`application must register a DI token '${di_tokens_1.DITokens.FixSession}' - see src/sample`));
            }
            logger.info(`create session with DI Token ${di_tokens_1.DITokens.FixSession}`);
            const initiatorSession = sessionContainer.resolve(di_tokens_1.DITokens.FixSession);
            let connecting = true;
            while (connecting) {
                try {
                    yield this.connect(initiatorSession);
                    logger.info('session has ended');
                    connecting = false;
                    accept(true);
                }
                catch (e) {
                    if (!reconnectTimeout) {
                        connecting = false;
                        reject(e);
                    }
                    else {
                        logger.info(`waiting ${reconnectTimeout} to reconnect following error`);
                        yield this.delay(reconnectTimeout);
                    }
                }
            }
        }));
    }
    delay(p) {
        return new Promise((accept) => {
            if (!p) {
                accept(true);
            }
            setTimeout(() => {
                accept(true);
            }, p);
        });
    }
    connect(initiatorSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const logger = this.config.logFactory.logger('initiator');
            const initiator = this.config.sessionContainer.resolve(tcp_initiator_1.TcpInitiator);
            logger.info('connecting ...');
            const initiatorTransport = yield initiator.connect(22);
            logger.info('... connected, run session');
            yield initiatorSession.run(initiatorTransport);
            logger.info('ends');
            return true;
        });
    }
};
TcpInitiatorConnector = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(di_tokens_1.DITokens.IJsFixConfig)),
    __metadata("design:paramtypes", [Object])
], TcpInitiatorConnector);
exports.TcpInitiatorConnector = TcpInitiatorConnector;
//# sourceMappingURL=tcp-initiator-connector.js.map