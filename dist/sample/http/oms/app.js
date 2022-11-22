"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const http_server_1 = require("./http-server");
const http_client_1 = require("./http-client");
const runtime_1 = require("../../../runtime");
class AppLauncher extends runtime_1.SessionLauncher {
    constructor() {
        super('data/session/test-http-initiator.json', 'data/session/test-http-acceptor.json');
    }
    makeFactory(config) {
        const isInitiator = this.isInitiator(config.description);
        return {
            makeSession: () => isInitiator ?
                new http_client_1.HttpClient(config) :
                new http_server_1.HttpServer(config)
        };
    }
    getInitiator(sessionContainer) {
        const config = sessionContainer.resolve(runtime_1.DITokens.IJsFixConfig);
        config.description.application.http.adapter = sessionContainer.resolve(runtime_1.DITokens.IHttpAdapter);
        const initiator = sessionContainer.resolve(runtime_1.DITokens.FixEntity);
        return initiator.start();
    }
}
const l = new AppLauncher();
l.exec();
//# sourceMappingURL=app.js.map