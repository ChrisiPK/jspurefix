"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinstonLogger = void 0;
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;
class WinstonLogger {
    constructor(options = WinstonLogger.consoleOptions()) {
        this.options = options;
        this.appLogger = createLogger(options);
    }
    static consoleOptions(level = 'debug') {
        return {
            format: combine(timestamp(), WinstonLogger.appFormat),
            level: level,
            transports: [
                new transports.Console()
            ]
        };
    }
    static fileOptions(fileName, level = 'debug', maxSize = 50 * 1024 * 1024, format = combine(timestamp(), WinstonLogger.appFormat)) {
        return {
            format: format,
            level: level,
            transports: [
                new transports.File({
                    filename: fileName,
                    maxsize: maxSize
                })
            ]
        };
    }
    plain(fileName, maxSize = 10 * 1024 * 1024) {
        const txtLogger = createLogger({
            format: WinstonLogger.plainFormat,
            level: 'info',
            transports: [
                new transports.File({
                    filename: fileName,
                    maxsize: maxSize
                })
            ]
        });
        return {
            log: function (txt) {
                txtLogger.info({
                    type: 'info',
                    message: txt
                });
            },
            info: function (msg) {
                this.log(msg);
            },
            debug: function (msg) {
                this.log(msg);
            },
            warning: function (msg) {
                this.log(msg);
            },
            error: function () {
            }
        };
    }
    make(type) {
        const logger = this.appLogger;
        return {
            info: function (msg) {
                logger.info({
                    type: type,
                    message: msg
                });
            },
            debug: function (msg) {
                logger.debug({
                    type: type,
                    message: msg
                });
            },
            warning: function (msg) {
                logger.warn({
                    type: type,
                    message: msg
                });
            },
            error: function (e) {
                logger.error({
                    type: type,
                    message: `${e.message} : ${e.stack}`
                });
            }
        };
    }
}
exports.WinstonLogger = WinstonLogger;
WinstonLogger.appFormat = printf((info) => {
    return `${info.timestamp} [${info.type}] ${info.level}: ${info.message}`;
});
WinstonLogger.plainFormat = printf((info) => {
    return `${info.message}`;
});
//# sourceMappingURL=winston-logger.js.map