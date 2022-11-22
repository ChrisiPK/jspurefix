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
exports.TcpAcceptor = void 0;
const duplex_1 = require("../duplex");
const factory_1 = require("../factory");
const fix_acceptor_1 = require("../fix-acceptor");
const net_1 = require("net");
const tls_1 = require("tls");
const tls_options_factory_1 = require("./tls-options-factory");
const tsyringe_1 = require("tsyringe");
const di_tokens_1 = require("../../runtime/di-tokens");
let TcpAcceptor = class TcpAcceptor extends fix_acceptor_1.FixAcceptor {
    constructor(config) {
        super(config.description.application);
        this.config = config;
        this.nextId = 0;
        this.logger = config.logFactory.logger(`${config.description.application.name}:TcpAcceptor`);
        const tlsOptions = this.tlsOptions();
        if (tlsOptions) {
            this.tlsServer();
        }
        else {
            this.unsecureServer();
        }
        this.server.on('error', ((err) => {
            throw err;
        }));
    }
    getId() {
        this.nextId++;
        return this.nextId;
    }
    tlsServer() {
        try {
            const config = this.config;
            const tcp = this.config.description.application.tcp;
            const tlsOptions = tls_options_factory_1.TlsOptionsFactory.getTlsOptions(tcp.tls);
            this.logger.info(`create tls server`);
            this.server = (0, tls_1.createServer)(tlsOptions, (tlsSocket) => {
                if (tcp.tls.enableTrace) {
                    this.logger.info(`enabling tls session trace`);
                    tlsSocket.enableTrace();
                }
                if (tlsSocket.authorized) {
                    tlsSocket.setEncoding('utf8');
                    const id = this.getId();
                    this.logger.info(`tls creates session ${id} ${tlsSocket.authorized}`);
                    this.onSocket(id, tlsSocket, config);
                }
                else {
                    this.logger.info(`no transport created on tls with no authorized connection`);
                }
            });
        }
        catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
    unsecureServer() {
        try {
            const config = this.config;
            this.logger.info(`create unsecured server`);
            this.server = (0, net_1.createServer)((socket) => {
                const id = this.getId();
                this.logger.info(`net creates session ${id}`);
                socket.setNoDelay(true);
                this.onSocket(id, socket, config);
            });
        }
        catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
    tlsOptions() {
        const tcp = this.config.description.application.tcp;
        return tls_options_factory_1.TlsOptionsFactory.getTlsOptions(tcp.tls);
    }
    onSocket(id, socket, config) {
        const transport = new factory_1.MsgTransport(id, config, new duplex_1.TcpDuplex(socket));
        this.saveTransport(id, transport);
        transport.receiver.on('end', () => {
            this.harvestTransport(id);
        });
        transport.receiver.on('error', (e) => {
            this.logger.error(e);
            this.harvestTransport(id);
        });
    }
    listen() {
        const port = this.config.description.application.tcp.port;
        this.logger.info(`start to listen ${port}`);
        this.server.on('connection', () => {
            this.logger.info('insecure connection established');
        });
        this.server.on('secureConnection', (s) => {
            this.logger.info(`secure connection; client authorized: ${s.authorized}`);
        });
        this.server.listen(port);
    }
    close(callback) {
        const port = this.config.description.application.tcp.port;
        this.logger.info(`close listener on port ${port}`);
        this.server.close(callback);
    }
    saveTransport(tid, transport) {
        this.transports[tid] = transport;
        const keys = Object.keys(this.transports);
        this.logger.info(`new transport id = ${tid} created total transports = ${keys.length}`);
        this.emit('transport', transport);
    }
    harvestTransport(tid) {
        delete this.transports[tid];
        const keys = Object.keys(this.transports);
        this.logger.info(`transport ${tid} ends total transports = ${keys.length}`);
    }
};
TcpAcceptor = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(di_tokens_1.DITokens.IJsFixConfig)),
    __metadata("design:paramtypes", [Object])
], TcpAcceptor);
exports.TcpAcceptor = TcpAcceptor;
//# sourceMappingURL=tcp-acceptor.js.map