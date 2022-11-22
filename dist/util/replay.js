"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileReplayer = void 0;
const transport_1 = require("../transport");
const factory_1 = require("../transport/factory");
class FileReplayer {
    constructor(config) {
        this.config = config;
    }
    replayFixFile(replayFile) {
        return new Promise((accept, reject) => {
            try {
                const arr = [];
                const transport = new factory_1.MsgTransport(1, this.config, new transport_1.FileDuplex(replayFile));
                transport.receiver.on('msg', (msgType, m) => {
                    arr.push(m.clone());
                });
                transport.receiver.on('end', () => {
                    accept(arr);
                });
                transport.receiver.on('error', (e) => {
                    reject(e);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
}
exports.FileReplayer = FileReplayer;
//# sourceMappingURL=replay.js.map