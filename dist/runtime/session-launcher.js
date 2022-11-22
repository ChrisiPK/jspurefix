"use strict";
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
exports.SessionLauncher = void 0;
const path = require("path");
const config_1 = require("../config");
const session_container_1 = require("./session-container");
const di_tokens_1 = require("./di-tokens");
const defaultLoggerFactory = new config_1.JsFixWinstonLogFactory(config_1.WinstonLogger.consoleOptions('info'));
class SessionLauncher {
    constructor(initiatorConfig, acceptorConfig = null, loggerFactory = defaultLoggerFactory) {
        this.loggerFactory = loggerFactory;
        this.root = '../../';
        this.sessionContainer = new session_container_1.SessionContainer();
        this.logger = this.loggerFactory.logger('launcher');
        this.initiatorConfig = this.loadConfig(initiatorConfig);
        this.acceptorConfig = this.loadConfig(acceptorConfig);
    }
    empty() {
        return new Promise((resolve, _) => {
            setImmediate(() => {
                this.logger.info('resolving an empty promise');
                resolve(null);
            });
        });
    }
    getAcceptor(sessionContainer) {
        if (sessionContainer.isRegistered(di_tokens_1.DITokens.FixEntity)) {
            const entity = sessionContainer.resolve(di_tokens_1.DITokens.FixEntity);
            return entity.start();
        }
        else {
            return this.empty();
        }
    }
    getInitiator(sessionContainer) {
        if (sessionContainer.isRegistered(di_tokens_1.DITokens.FixEntity)) {
            const entity = sessionContainer.resolve(di_tokens_1.DITokens.FixEntity);
            return entity.start();
        }
        else {
            return this.empty();
        }
    }
    makeFactory(config) {
        return null;
    }
    run() {
        return new Promise((accept, reject) => {
            const logger = this.logger;
            logger.info('launching ..');
            this.setup().then(() => {
                logger.info('.. done');
                accept(true);
            }).catch((e) => {
                logger.error(e);
                reject(e);
            });
        });
    }
    exec() {
        this.run().then(() => {
            console.log('finished.');
        }).catch(e => {
            console.error(e);
        });
    }
    isAscii(description) {
        return this.sessionContainer.isAscii(description);
    }
    isInitiator(description) {
        return this.sessionContainer.isInitiator(description);
    }
    registerApplication(sessionContainer) {
        this.logger.info('bypass register via DI');
    }
    makeSystem(description) {
        this.logger.info(`creating app ${description.application.name} [protocol ${description.application.protocol}]`);
        return this.sessionContainer.makeSystem(description);
    }
    register(container) {
        const config = container.resolve(di_tokens_1.DITokens.IJsFixConfig);
        const factory = this.makeFactory(config);
        if (!factory) {
            this.registerApplication(container);
        }
        else {
            if (factory.makeSession) {
                container.register(di_tokens_1.DITokens.FixSession, {
                    useFactory: () => factory.makeSession(config)
                });
            }
        }
    }
    makeClient() {
        return __awaiter(this, void 0, void 0, function* () {
            const sessionContainer = yield this.makeSystem(this.initiatorConfig);
            this.register(sessionContainer);
            this.logger.info('create initiator');
            return this.getInitiator(sessionContainer);
        });
    }
    makeServer() {
        return __awaiter(this, void 0, void 0, function* () {
            const sessionContainer = yield this.makeSystem(this.acceptorConfig);
            this.register(sessionContainer);
            this.logger.info('create acceptor');
            return this.getAcceptor(sessionContainer);
        });
    }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            this.sessionContainer.registerGlobal(this.loggerFactory);
            const server = this.acceptorConfig ? this.makeServer() : this.empty();
            const client = this.initiatorConfig ? this.makeClient() : this.empty();
            this.logger.info('launching ....');
            return Promise.all([server, client]);
        });
    }
    loadConfig(config) {
        if (typeof config === 'string') {
            return require(path.join(this.root, config));
        }
        return config;
    }
}
exports.SessionLauncher = SessionLauncher;
//# sourceMappingURL=session-launcher.js.map