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
exports.RespawnAcceptor = void 0;
const tcp_1 = require("../../../transport/tcp");
const tsyringe_1 = require("tsyringe");
const transport_1 = require("../../../transport");
let RespawnAcceptor = class RespawnAcceptor extends transport_1.FixEntity {
    constructor(config) {
        super(config);
        this.config = config;
        this.logger = config.logFactory.logger('RespawnAcceptor');
    }
    start() {
        return this.waitFor();
    }
    waitFor(respawns = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let respawned = 0;
                while (respawned <= respawns) {
                    try {
                        const sessionContainer = this.config.sessionContainer;
                        const listener = sessionContainer.resolve(tcp_1.TcpAcceptorListener);
                        const dropConnectionTimeout = respawned === 0 ? 5 : -1;
                        sessionContainer.register('dropConnectionTimeout', { useValue: dropConnectionTimeout });
                        this.logger.info(`waitFor: waiting for acceptor respawned = ${respawned}`);
                        yield listener.start();
                        break;
                    }
                    catch (e) {
                        this.logger.info(`waitFor: error in acceptor respawned = ${respawned}`);
                    }
                    ++respawned;
                }
                if (respawned > 0) {
                    this.logger.info(`acceptor respawned reject = ${respawned}`);
                    reject(respawned);
                }
                else {
                    this.logger.info(`resolve = ${respawned}`);
                    resolve(respawned);
                }
            }));
        });
    }
};
RespawnAcceptor = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('IJsFixConfig')),
    __metadata("design:paramtypes", [Object])
], RespawnAcceptor);
exports.RespawnAcceptor = RespawnAcceptor;
//# sourceMappingURL=respawn-acceptor.js.map