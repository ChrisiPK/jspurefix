"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsFixConfig = void 0;
const empty_log_factory_1 = require("./empty-log-factory");
const ascii_1 = require("../buffer/ascii");
class JsFixConfig {
    constructor(factory, definitions, description, delimiter = ascii_1.AsciiChars.Soh, logFactory = new empty_log_factory_1.EmptyLogFactory()) {
        this.factory = factory;
        this.definitions = definitions;
        this.description = description;
        this.delimiter = delimiter;
        this.logFactory = logFactory;
        this.logDelimiter = ascii_1.AsciiChars.Pipe;
    }
}
exports.JsFixConfig = JsFixConfig;
//# sourceMappingURL=js-fix-config.js.map