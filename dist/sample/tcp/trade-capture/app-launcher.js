"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLauncher = void 0;
const runtime_1 = require("../../../runtime");
const trade_capture_client_1 = require("./trade-capture-client");
const trade_capture_server_1 = require("./trade-capture-server");
class AppLauncher extends runtime_1.SessionLauncher {
    constructor(client = 'data/session/test-initiator.json', server = 'data/session/test-acceptor.json') {
        super(client, server);
    }
    makeFactory(config) {
        const isInitiator = this.isInitiator(config.description);
        return {
            makeSession: () => isInitiator ?
                new trade_capture_client_1.TradeCaptureClient(config) :
                new trade_capture_server_1.TradeCaptureServer(config)
        };
    }
}
exports.AppLauncher = AppLauncher;
//# sourceMappingURL=app-launcher.js.map