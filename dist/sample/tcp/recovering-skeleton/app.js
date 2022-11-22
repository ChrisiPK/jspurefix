"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const runtime_1 = require("../../../runtime");
const skeleton_client_1 = require("./skeleton-client");
const tcp_1 = require("../../../transport/tcp");
const respawn_acceptor_1 = require("./respawn-acceptor");
const ascii_1 = require("../../../buffer/ascii");
const skeleton_server_1 = require("./skeleton-server");
class AppLauncher extends runtime_1.SessionLauncher {
    constructor() {
        super('data/session/test-initiator.json', 'data/session/test-acceptor.json');
    }
    registerApplication(sessionContainer) {
        const config = sessionContainer.resolve(runtime_1.DITokens.IJsFixConfig);
        config.logDelimiter = ascii_1.AsciiChars.Carat;
        const isInitiator = this.isInitiator(config.description);
        if (isInitiator) {
            sessionContainer.register(runtime_1.DITokens.FixSession, {
                useClass: skeleton_client_1.SkeletonClient
            });
            sessionContainer.register(runtime_1.DITokens.FixEntity, {
                useClass: tcp_1.RecoveringTcpInitiator
            });
        }
        else {
            sessionContainer.register(runtime_1.DITokens.FixEntity, {
                useClass: respawn_acceptor_1.RespawnAcceptor
            });
            sessionContainer.register(runtime_1.DITokens.FixSession, {
                useClass: skeleton_server_1.SkeletonServer
            });
            sessionContainer.register('logoutSeconds', {
                useValue: 45
            });
        }
        sessionContainer.register('logoutSeconds', {
            useValue: 45
        });
        sessionContainer.register('useInMemoryStore', {
            useValue: false
        });
    }
}
const l = new AppLauncher();
l.exec();
//# sourceMappingURL=app.js.map