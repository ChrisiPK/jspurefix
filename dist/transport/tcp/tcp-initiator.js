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
exports.TcpInitiator = exports.InitiatorState = void 0;
const fix_initiator_1 = require("../fix-initiator");
const factory_1 = require("../factory");
const duplex_1 = require("../duplex");
const util = require("util");
const tls_1 = require("tls");
const net_1 = require("net");
const tls_options_factory_1 = require("./tls-options-factory");
const tsyringe_1 = require("tsyringe");
const di_tokens_1 = require("../../runtime/di-tokens");
var InitiatorState;
(function (InitiatorState) {
    InitiatorState[InitiatorState["Idle"] = 1] = "Idle";
    InitiatorState[InitiatorState["Connecting"] = 2] = "Connecting";
    InitiatorState[InitiatorState["Connected"] = 3] = "Connected";
    InitiatorState[InitiatorState["Stopped"] = 4] = "Stopped";
})(InitiatorState = exports.InitiatorState || (exports.InitiatorState = {}));
let TcpInitiator = class TcpInitiator extends fix_initiator_1.FixInitiator {
    constructor(jsFixConfig) {
        super(jsFixConfig.description.application);
        this.jsFixConfig = jsFixConfig;
        this.state = InitiatorState.Idle;
        this.th = null;
        this.logger = jsFixConfig.logFactory.logger(`${this.application.name}:TcpInitiator`);
        if (!this.application) {
            throw new Error(`no application in session description.`);
        }
        this.tcp = this.application.tcp;
        if (!this.tcp) {
            throw new Error(`no tcp in session description need tcp { host: hostname, port: port }`);
        }
    }
    end() {
        this.clearTimer();
        switch (this.state) {
            case InitiatorState.Connected: {
                this.logger.info('end');
                this.duplex.end();
                this.state = InitiatorState.Stopped;
                break;
            }
            default: {
                this.logger.info(`end :state ${this.state}`);
                this.state = InitiatorState.Stopped;
                break;
            }
        }
    }
    connect(timeoutSeconds) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            switch (this.state) {
                case InitiatorState.Idle: {
                    this.state = InitiatorState.Connecting;
                    this.logger.info(`connecting with timeout ${timeoutSeconds}`);
                    this.tryConnect()
                        .then((t) => resolve(t))
                        .catch((e) => {
                        this.repeatConnect(timeoutSeconds)
                            .then((t) => resolve(t))
                            .catch((e) => reject(e));
                    });
                    break;
                }
                default:
                    const e = new Error(`connect not valid from non idle state`);
                    this.logger.warning(`rejecting from state ${this.state}`);
                    reject(e);
            }
        }));
    }
    unsecureDuplex() {
        const tcp = this.tcp;
        return new Promise((resolve, reject) => {
            try {
                this.logger.info(`unsecureDuplex try to connect to endPoint`);
                const socket = (0, net_1.createConnection)(tcp, () => {
                    try {
                        this.logger.info(`net.createConnection cb, resolving`);
                        const tcpDuplex = new duplex_1.TcpDuplex(socket);
                        resolve(tcpDuplex);
                    }
                    catch (e) {
                        reject(e);
                    }
                });
                socket.on('error', (err) => {
                    reject(err);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
    tlsDuplex() {
        return new Promise((resolve, reject) => {
            let tlsSocket = null;
            const tcp = this.tcp;
            const connectionOptions = tls_options_factory_1.TlsOptionsFactory.getTlsConnectionOptions(tcp);
            if (connectionOptions) {
                try {
                    tlsSocket = (0, tls_1.connect)(connectionOptions, () => {
                        this.logger.info(`client connected ${tlsSocket.authorized ? 'authorized' : 'unauthorized'}`);
                        if (!tlsSocket.authorized) {
                            const error = tlsSocket.authorizationError;
                            this.logger.warning(`rejecting from state ${this.state} authorizationError ${error}`);
                            tlsSocket.end();
                            reject(error);
                        }
                        else {
                            tlsSocket.setEncoding('utf8');
                            const tlsDuplex = new duplex_1.TcpDuplex(tlsSocket);
                            if (tcp.tls.enableTrace) {
                                this.logger.info(`enabling tls session trace`);
                                tlsSocket.enableTrace();
                            }
                            this.logger.info(`tlsDuplex resolving`);
                            resolve(tlsDuplex);
                        }
                    });
                    tlsSocket.on('error', (err) => {
                        reject(err);
                    });
                }
                catch (e) {
                    reject(e);
                }
            }
        });
    }
    tryConnect() {
        return new Promise((resolve, reject) => {
            const tcp = this.tcp;
            const connectionOptions = tls_options_factory_1.TlsOptionsFactory.getTlsConnectionOptions(tcp);
            const connector = connectionOptions ? this.tlsDuplex() : this.unsecureDuplex();
            this.logger.info(`tryConnect ${tcp.host}:${tcp.port}`);
            connector.then(duplex => {
                this.duplex = duplex;
                resolve(new factory_1.MsgTransport(0, this.jsFixConfig, duplex));
            }).catch(e => {
                reject(e);
            });
        });
    }
    clearTimer() {
        if (this.th) {
            clearInterval(this.th);
            this.th = null;
        }
    }
    repeatConnect(timeoutSeconds) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const application = this.application;
            const promisify = util.promisify;
            const timeoutPromise = promisify(setTimeout);
            let retries = 0;
            let lastError;
            this.th = setInterval(() => {
                ++retries;
                this.tryConnect()
                    .then((t) => {
                    this.state = InitiatorState.Connected;
                    this.clearTimer();
                    resolve(t);
                }).catch((e) => {
                    lastError = e;
                    this.logger.info(`${application.name}: retries ${retries} ${e.message}`);
                });
            }, application.reconnectSeconds * 1000);
            timeoutPromise(timeoutSeconds * 1000).then(() => {
                this.clearTimer();
                this.state = InitiatorState.Stopped;
                const e = lastError !== null && lastError !== void 0 ? lastError : new Error(`${application.name}: timeout of ${timeoutSeconds} whilst connecting`);
                reject(e);
            }).catch(e => {
                reject(e);
            });
        }));
    }
};
TcpInitiator = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(di_tokens_1.DITokens.IJsFixConfig)),
    __metadata("design:paramtypes", [Object])
], TcpInitiator);
exports.TcpInitiator = TcpInitiator;
//# sourceMappingURL=tcp-initiator.js.map