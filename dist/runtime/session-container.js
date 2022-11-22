"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionContainer = void 0;
const tsyringe_1 = require("tsyringe");
const util_1 = require("../util");
const config_1 = require("../config");
const di_tokens_1 = require("./di-tokens");
const make_config_1 = require("./make-config");
const tcp_1 = require("../transport/tcp");
const http_1 = require("../transport/http");
const ascii_msg_transmitter_1 = require("../transport/ascii/ascii-msg-transmitter");
const fixml_msg_transmitter_1 = require("../transport/fixml/fixml-msg-transmitter");
const fixml_1 = require("../transport/fixml");
const ascii_1 = require("../transport/ascii");
const buffer_1 = require("../buffer");
const ascii_2 = require("../buffer/ascii");
const fixml_2 = require("../buffer/fixml");
class SessionContainer {
    reset() {
        tsyringe_1.container.reset();
    }
    registerGlobal(levelOrLoggerFactory = 'info') {
        tsyringe_1.container.registerInstance(util_1.DefinitionFactory, new util_1.DefinitionFactory());
        let lf;
        if (typeof levelOrLoggerFactory === 'string') {
            lf = new config_1.JsFixWinstonLogFactory(config_1.WinstonLogger.consoleOptions(levelOrLoggerFactory));
        }
        else {
            lf = levelOrLoggerFactory;
        }
        tsyringe_1.container.registerInstance(di_tokens_1.DITokens.JsFixLoggerFactory, lf);
        tsyringe_1.container.register(make_config_1.RuntimeFactory, {
            useClass: make_config_1.RuntimeFactory
        });
        tsyringe_1.container.register(di_tokens_1.DITokens.ElasticBuffer, {
            useClass: buffer_1.ElasticBuffer
        });
    }
    makeSessionFactory(description) {
        const fixml = !this.isAscii(description);
        return fixml ?
            new fixml_1.FixmlSessionMsgFactory(description) :
            new ascii_1.AsciiSessionMsgFactory(description);
    }
    newChild(description) {
        const sessionContainer = tsyringe_1.container.createChildContainer();
        const sf = this.makeSessionFactory(description);
        sessionContainer.registerInstance(di_tokens_1.DITokens.ISessionDescription, description);
        sessionContainer.registerInstance(di_tokens_1.DITokens.ISessionMsgFactory, sf);
        return sessionContainer;
    }
    makeSystem(description) {
        return new Promise((resolve, reject) => {
            const sessionContainer = this.newChild(description);
            const factory = sessionContainer.resolve(make_config_1.RuntimeFactory);
            factory.makeConfig().then((c) => {
                this.registerSession(c, sessionContainer);
                resolve(sessionContainer);
            }).catch(e => {
                reject(e);
            });
        });
    }
    isAscii(description) {
        return description.application.protocol === 'ascii';
    }
    isInitiator(description) {
        return description.application.type === 'initiator';
    }
    asAscii(description, sessionContainer) {
        sessionContainer.register(di_tokens_1.DITokens.MsgTransmitter, {
            useClass: ascii_msg_transmitter_1.AsciiMsgTransmitter
        });
        sessionContainer.register(di_tokens_1.DITokens.MsgParser, {
            useClass: ascii_2.AsciiParser
        });
        const parseSize = 160 * 1024;
        const sendSize = 10 * 1024;
        sessionContainer.register(di_tokens_1.DITokens.maxMessageLen, {
            useValue: parseSize
        });
        sessionContainer.register(ascii_2.AsciiSegmentParser, {
            useClass: ascii_2.AsciiSegmentParser
        });
        sessionContainer.register(ascii_2.AsciiParserState, {
            useClass: ascii_2.AsciiParserState
        });
        sessionContainer.registerInstance(di_tokens_1.DITokens.TransmitBuffer, new buffer_1.ElasticBuffer(sendSize));
        sessionContainer.registerInstance(di_tokens_1.DITokens.ParseBuffer, new buffer_1.ElasticBuffer(parseSize));
        if (this.isInitiator(description)) {
            sessionContainer.register(tcp_1.TcpInitiator, {
                useClass: tcp_1.TcpInitiator
            });
            sessionContainer.register(tcp_1.RecoveringTcpInitiator, {
                useClass: tcp_1.RecoveringTcpInitiator
            });
            sessionContainer.register(tcp_1.TcpInitiatorConnector, {
                useClass: tcp_1.TcpInitiatorConnector
            });
            if (description.application.resilient) {
                sessionContainer.register(di_tokens_1.DITokens.FixEntity, {
                    useClass: tcp_1.RecoveringTcpInitiator
                });
            }
            else {
                sessionContainer.register(di_tokens_1.DITokens.FixEntity, {
                    useClass: tcp_1.TcpInitiatorConnector
                });
            }
        }
        else {
            sessionContainer.register(di_tokens_1.DITokens.FixEntity, {
                useClass: tcp_1.TcpAcceptorListener
            });
        }
    }
    asFixml(description, sessionContainer) {
        sessionContainer.register(di_tokens_1.DITokens.MsgTransmitter, {
            useClass: fixml_msg_transmitter_1.FixmlMsgTransmitter
        });
        const sendSize = 10 * 1024;
        sessionContainer.register(di_tokens_1.DITokens.MsgParser, {
            useClass: fixml_2.FiXmlParser
        });
        sessionContainer.register(di_tokens_1.DITokens.maxMessageLocations, {
            useValue: sendSize
        });
        sessionContainer.register(di_tokens_1.DITokens.MsgEncoder, {
            useClass: fixml_2.FixmlEncoder
        });
        sessionContainer.registerInstance(di_tokens_1.DITokens.TransmitBuffer, new buffer_1.ElasticBuffer(sendSize));
        sessionContainer.register(http_1.HttpAcceptorListener, {
            useClass: http_1.HttpAcceptorListener
        });
        sessionContainer.register(http_1.HttpInitiator, {
            useClass: http_1.HttpInitiator
        });
        if (this.isInitiator(description)) {
            sessionContainer.register(di_tokens_1.DITokens.FixEntity, {
                useClass: http_1.HttpInitiator
            });
            sessionContainer.register(di_tokens_1.DITokens.IHttpAdapter, {
                useClass: http_1.HttpJsonSampleAdapter
            });
        }
        else {
            sessionContainer.register(di_tokens_1.DITokens.FixEntity, {
                useClass: http_1.HttpAcceptorListener
            });
        }
    }
    asciiConstants(c, sessionContainer) {
        sessionContainer.register(di_tokens_1.DITokens.delimiter, {
            useValue: c.delimiter
        });
        sessionContainer.register(di_tokens_1.DITokens.logDelimiter, {
            useValue: c.logDelimiter
        });
    }
    registerSession(c, sessionContainer) {
        if (this.isAscii(c.description)) {
            this.asAscii(c.description, sessionContainer);
            this.asciiConstants(c, sessionContainer);
        }
        else {
            this.asFixml(c.description, sessionContainer);
        }
        c.sessionContainer = sessionContainer;
        sessionContainer.registerInstance(di_tokens_1.DITokens.IJsFixConfig, c);
        sessionContainer.registerInstance(di_tokens_1.DITokens.Definitions, c.definitions);
    }
}
exports.SessionContainer = SessionContainer;
//# sourceMappingURL=session-container.js.map