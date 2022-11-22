"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgTransmitter = void 0;
const stream_1 = require("stream");
const msg_payload_1 = require("./msg-payload");
const events = require("events");
class MsgTransmitter extends events.EventEmitter {
    constructor(buffer, definitions, session) {
        super();
        this.buffer = buffer;
        this.definitions = definitions;
        this.session = session;
        this.encodeStream = this.encoderStream();
        this.encodeStream.on('error', (e) => {
            this.emit('error', e);
        });
        this.encodeStream.on('done', () => {
            this.emit('done');
        });
    }
    send(msgType, obj) {
        this.encodeStream.write(new msg_payload_1.MsgPayload(msgType, obj));
    }
    encoderStream() {
        const transmitter = this;
        return new stream_1.Transform({
            writableObjectMode: true,
            transform(payload, encoding, done) {
                try {
                    const msgType = payload.msgType;
                    transmitter.encoder.reset();
                    transmitter.encodeMessage(msgType, payload.obj);
                    payload.encoded = transmitter.encoder.trim();
                    this.push(payload.encoded);
                    const encodedTxt = transmitter.buffer.toString();
                    transmitter.emit('encoded', msgType, encodedTxt);
                    done();
                }
                catch (e) {
                    done(e);
                }
            }
        });
    }
}
exports.MsgTransmitter = MsgTransmitter;
//# sourceMappingURL=msg-transmitter.js.map