"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experiment = void 0;
const transport_1 = require("../../transport");
const factory_1 = require("../../transport/factory");
class FixEntity {
    constructor(config, duplex = new transport_1.StringDuplex(), transport = new factory_1.MsgTransport(0, config, duplex)) {
        this.config = config;
        this.duplex = duplex;
        this.transport = transport;
        this.views = [];
        this.errors = [];
    }
}
class Experiment {
    constructor(setup) {
        this.clientFactory = setup.client.sessionMsgFactory;
        this.serverFactory = setup.server.sessionMsgFactory;
        const clientConfig = setup.clientConfig;
        const serverConfig = setup.serverConfig;
        this.client = new FixEntity(clientConfig);
        this.server = new FixEntity(serverConfig);
        this.loopBack(this.client.duplex, this.server.duplex);
        this.loopBack(this.server.duplex, this.client.duplex);
    }
    loopBack(lhs, rhs) {
        lhs.writable.on('data', (data) => {
            rhs.readable.push(data);
        });
    }
}
exports.Experiment = Experiment;
//# sourceMappingURL=experiment.js.map