"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeEmptyLogger = exports.EmptyLogger = void 0;
class EmptyLogger {
    constructor(type = '') {
        this.type = type;
    }
    info(message) {
    }
    warning(message) {
    }
    debug(message) {
    }
    error(error) {
    }
}
exports.EmptyLogger = EmptyLogger;
function makeEmptyLogger(type) {
    return new EmptyLogger(type);
}
exports.makeEmptyLogger = makeEmptyLogger;
//# sourceMappingURL=js-fix-logger.js.map