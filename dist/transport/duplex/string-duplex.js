"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringDuplex = void 0;
const fix_duplex_1 = require("./fix-duplex");
class StringDuplex extends fix_duplex_1.FixDuplex {
    constructor(text = '', chunks = false) {
        super();
        this.text = text;
        this.chunks = chunks;
        this.readable = StringDuplex.makeReadable(text, chunks);
        this.writable = StringDuplex.makeWritable();
    }
    static makeReadable(text, chunks) {
        const Readable = require('stream').Readable;
        let total = 0;
        const reader = {
            read: (size) => {
                total += size;
                if (text.length > 0 && total > text.length) {
                    readable.push(null);
                }
            }
        };
        const readable = new Readable(reader);
        if (!chunks) {
            readable.push(text);
        }
        else {
            StringDuplex.sendReaderChunks(text, readable);
        }
        return readable;
    }
    static makeWritable() {
        const Writable = require('stream').Writable;
        const writer = {
            write: (data, _, done) => {
                try {
                    receiver.emit('data', data);
                    done();
                }
                catch (e) {
                    done(e);
                }
            }
        };
        const receiver = new Writable(writer);
        return receiver;
    }
    static sendReaderChunks(text, readable) {
        let start = 0;
        let iteration = 0;
        let remaining = text.length;
        while (remaining > 0) {
            iteration++;
            let chunk = Math.min(remaining, iteration % 10);
            remaining -= chunk;
            const end = start + chunk;
            let snippet = text.slice(start, end);
            readable.push(snippet);
            start = end;
        }
    }
    end() {
        if (this.text.length === 0) {
            this.readable.push(null);
        }
    }
}
exports.StringDuplex = StringDuplex;
//# sourceMappingURL=string-duplex.js.map