"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpDuplex = void 0;
const fix_duplex_1 = require("./fix-duplex");
const rp = require("request-promise-native");
class HttpDuplex extends fix_duplex_1.FixDuplex {
    constructor(adapter) {
        super();
        this.adapter = adapter;
        this.readable = HttpDuplex.makeReadable();
        this.writable = this.makeWritable();
    }
    static makeReadable() {
        const Readable = require('stream').Readable;
        const reader = {
            read: () => {
            }
        };
        return new Readable(reader);
    }
    makeWritable() {
        const forward = this.readable;
        const Writable = require('stream').Writable;
        const writer = {
            write: (data, _, done) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const adapter = this.adapter;
                    const options = adapter.getOptions(data);
                    rp(options).then((message) => {
                        const body = adapter.endMessage(message);
                        forward.push(body);
                        done();
                    }).catch((err) => {
                        receiver.emit('error', err);
                    });
                }
                catch (e) {
                    done(e);
                }
            })
        };
        const receiver = new Writable(writer);
        return receiver;
    }
    end() {
        this.readable.push(null);
    }
}
exports.HttpDuplex = HttpDuplex;
//# sourceMappingURL=http-duplex.js.map