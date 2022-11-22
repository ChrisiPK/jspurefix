"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsFixWinstonLogFactory = void 0;
const winston_logger_1 = require("./winston-logger");
const js_fix_logger_factory_1 = require("./js-fix-logger-factory");
class JsFixWinstonLogFactory extends js_fix_logger_factory_1.JsFixLoggerFactory {
    constructor(options = winston_logger_1.WinstonLogger.consoleOptions()) {
        super();
        this.options = options;
        this.wl = new winston_logger_1.WinstonLogger(options);
    }
    logger(type) {
        return this.wl.make(type);
    }
    plain(fileName, maxSize) {
        return this.wl.plain(fileName, maxSize);
    }
}
exports.JsFixWinstonLogFactory = JsFixWinstonLogFactory;
//# sourceMappingURL=js-fix-winston-log-factory.js.map