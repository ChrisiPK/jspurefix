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
exports.RecoveringTcpInitiator = void 0;
const tcp_initiator_1 = require("./tcp-initiator");
const session_state_1 = require("../session/session-state");
const tsyringe_1 = require("tsyringe");
const di_tokens_1 = require("../../runtime/di-tokens");
const fix_entity_1 = require("../fix-entity");
let RecoveringTcpInitiator = class RecoveringTcpInitiator extends fix_entity_1.FixEntity {
    constructor(jsFixConfig) {
        super(jsFixConfig);
        this.jsFixConfig = jsFixConfig;
        this.th = null;
        this.recoveryAttemptSecs = 5;
        this.backoffFailConnectSecs = 30;
        this.application = this.jsFixConfig.description.application;
        this.logger = jsFixConfig.logFactory.logger(`${this.application.name}:RecoveringTcpInitiator`);
        if (!this.application) {
            throw new Error(`no application in session description.`);
        }
        this.tcp = this.application.tcp;
        if (!this.tcp) {
            throw new Error(`no tcp in session description need tcp { host: hostname, port: port }`);
        }
        this.createSession(jsFixConfig);
    }
    createSession(jsFixConfig) {
        this.logger.info(`creating an application session with DI token ${di_tokens_1.DITokens.FixSession}.`);
        this.session = jsFixConfig.sessionContainer.resolve(di_tokens_1.DITokens.FixSession);
        this.session.on('done', () => {
            this.logger.info('session has permanently ended');
            this.emit('end', this);
        });
        this.session.on('end', () => {
            this.logger.info('session has permanently ended');
            this.emit('end', this);
        });
        this.session.setState(session_state_1.SessionState.DisconnectedNoConnectionToday);
    }
    getState() {
        return this.session.getState();
    }
    newTransport(transport) {
        this.transport = transport;
        this.emit('transport', transport);
        this.logger.info(`initiator connects id ${(transport.id)}`);
        const session = this.session;
        if (this.jsFixConfig.description.ResetSeqNumFlag) {
            this.logger.info('reset sequence numbers');
            session.reset();
        }
        session.setState(session_state_1.SessionState.NetworkConnectionEstablished);
        session.run(transport).then((id) => {
            if (!transport || id === transport.id) {
                this.emit('end', this);
            }
            else {
                this.logger.info(`old transport ${id} ends waiting on ${(transport.id)}`);
            }
        }).catch(e => {
            this.logger.info(`transport id ${(transport.id)} failed - session state ${session.getState()}`);
            this.logger.warning(e.message);
            this.recover();
        });
        this.logger.info(`running session with transport ${transport.id} state = ${session.getState()}`);
    }
    clearTimer() {
        if (this.th) {
            clearTimeout(this.th);
            this.th = null;
        }
    }
    recover() {
        this.session.setState(session_state_1.SessionState.DetectBrokenNetworkConnection);
        this.logger.info(`recover session transport - attempt in ${this.recoveryAttemptSecs} secs`);
        this.th = setTimeout(() => {
            this.connect(60).then(t => {
                this.logger.info(`new transport ${t.id}`);
            }).catch((e) => {
                this.logger.info(`failed to re-connect ${e.message} - backoff for ${this.backoffFailConnectSecs}`);
                this.th = setTimeout(() => {
                    this.logger.info('returning to recover()');
                    this.recover();
                }, this.backoffFailConnectSecs * 1000);
            });
        }, this.recoveryAttemptSecs * 1000);
    }
    start() {
        return this.run();
    }
    run(initialTimeout = 60) {
        return new Promise((resolve, reject) => {
            this.connect(initialTimeout).then(() => {
                this.on('end', () => {
                    this.clearTimer();
                    this.initiator.end();
                    this.logger.info(`run: transport ${this.transport.id} gracefully ends ${initialTimeout} - resolving`);
                    resolve(null);
                });
            }).catch(e => {
                this.logger.info(`run: failed to connect to first transport ${initialTimeout} - rejecting`);
                reject(e);
            });
        });
    }
    connect(timeout) {
        return new Promise((resolve, reject) => {
            this.logger.info(`connect: start initiator timeout ${timeout}`);
            this.session.setState(session_state_1.SessionState.InitiateConnection);
            this.initiator = new tcp_initiator_1.TcpInitiator(this.jsFixConfig);
            this.initiator.connect(timeout).then((transport) => {
                this.logger.info(`connect: receive new transport ${transport.id}`);
                this.newTransport(transport);
                resolve(transport);
            }).catch(e => {
                this.logger.info(`connect: failed to connect within ${timeout} - rejecting`);
                this.session.setState(session_state_1.SessionState.DetectBrokenNetworkConnection);
                reject(e);
            });
        });
    }
};
RecoveringTcpInitiator = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(di_tokens_1.DITokens.IJsFixConfig)),
    __metadata("design:paramtypes", [Object])
], RecoveringTcpInitiator);
exports.RecoveringTcpInitiator = RecoveringTcpInitiator;
//# sourceMappingURL=recovering-tcp-initiator.js.map