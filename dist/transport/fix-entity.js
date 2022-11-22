"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixEntity = void 0;
const events = require("events");
class FixEntity extends events.EventEmitter {
    constructor(config) {
        super();
        this.config = config;
    }
}
exports.FixEntity = FixEntity;
//# sourceMappingURL=fix-entity.js.map