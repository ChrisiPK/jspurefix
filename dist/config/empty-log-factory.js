"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyLogFactory = void 0;
const js_fix_logger_1 = require("./js-fix-logger");
const js_fix_logger_factory_1 = require("./js-fix-logger-factory");
class EmptyLogFactory extends js_fix_logger_factory_1.JsFixLoggerFactory {
    logger(type) {
        return new js_fix_logger_1.EmptyLogger(type);
    }
    plain(fileName, maxSize) {
        return new js_fix_logger_1.EmptyLogger();
    }
}
exports.EmptyLogFactory = EmptyLogFactory;
//# sourceMappingURL=empty-log-factory.js.map