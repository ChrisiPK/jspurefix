"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const md_client_1 = require("./md-client");
const md_server_1 = require("./md-server");
const runtime_1 = require("../../../runtime");
class AppLauncher extends runtime_1.SessionLauncher {
    constructor() {
        super('data/session/test-qf44-initiator.json', 'data/session/test-qf44-acceptor.json');
    }
    makeFactory(config) {
        const isInitiator = this.isInitiator(config.description);
        return {
            makeSession: () => isInitiator ?
                new md_client_1.MDClient(config) :
                new md_server_1.MDServer(config)
        };
    }
}
const l = new AppLauncher();
l.exec();
//# sourceMappingURL=app.js.map