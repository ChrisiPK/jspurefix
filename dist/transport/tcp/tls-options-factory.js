"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TlsOptionsFactory = void 0;
const path = require('path');
const fs = require('fs');
class TlsOptionsFactory {
    static read(filePath) {
        const root = path.join(__dirname, '../../../');
        const fullPath = path.join(root, filePath);
        return fs.readFileSync(fullPath, {
            encoding: 'utf8', flag: 'r'
        });
    }
    static getTlsOptions(tls) {
        let tlsOptions = null;
        if (tls) {
            tlsOptions = {
                requestCert: tls.requestCert,
                rejectUnauthorized: tls.rejectUnauthorized
            };
            if (tls.key) {
                tlsOptions.key = TlsOptionsFactory.read(tls.key);
                tlsOptions.cert = TlsOptionsFactory.read(tls.cert);
            }
            if (tls.ca && tls.ca.length > 0) {
                tlsOptions.ca = tls.ca.map(i => TlsOptionsFactory.read(i));
            }
        }
        if (tls.nodeTlsServerOptions) {
            tlsOptions = Object.assign(Object.assign({}, tlsOptions), tls.nodeTlsServerOptions);
        }
        return tlsOptions;
    }
    static getTlsConnectionOptions(tcp) {
        let connectionOptions = null;
        const tls = tcp.tls;
        if (tls) {
            connectionOptions = {
                port: tcp.port,
                host: tcp.host
            };
            if (tls.key) {
                connectionOptions.key = TlsOptionsFactory.read(tcp.tls.key);
                connectionOptions.cert = TlsOptionsFactory.read(tcp.tls.cert);
            }
            if (tcp.tls.ca && tcp.tls.ca.length > 0) {
                connectionOptions.ca = tcp.tls.ca.map(i => TlsOptionsFactory.read(i));
            }
            if (tcp.tls.timeout) {
                connectionOptions.timeout = tcp.tls.timeout;
            }
            if (tcp.tls.sessionTimeout) {
                connectionOptions.sessionTimeout = tcp.tls.sessionTimeout;
            }
        }
        if (tls.nodeTlsConnectionOptions) {
            connectionOptions = Object.assign(Object.assign({}, connectionOptions), tls.nodeTlsConnectionOptions);
        }
        return connectionOptions;
    }
}
exports.TlsOptionsFactory = TlsOptionsFactory;
//# sourceMappingURL=tls-options-factory.js.map