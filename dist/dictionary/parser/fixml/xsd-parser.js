"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XsdParser = void 0;
const fs = require("fs");
class XsdParser {
    constructor(definitions) {
        this.definitions = definitions;
        this.data = [];
    }
    parse(file) {
        return new Promise((accept, reject) => {
            const pass = fs.createReadStream(file);
            const saxStream = require('sax').createStream(true, {});
            const saxParser = saxStream._parser;
            saxStream.on('opentag', (node) => {
                this.open(saxParser.line, node);
            });
            saxStream.on('closetag', (name) => {
                this.close(saxParser.line, name);
            });
            saxStream.on('ready', () => {
                accept(this.definitions);
            });
            saxStream.on('text', (t) => {
                t = t.trim();
                if (t.length > 0 && this.pending) {
                    this.value(saxParser.line, this.pending, t);
                }
            });
            saxStream.on('error', (r) => {
                reject(r);
            });
            pass.pipe(saxStream);
        });
    }
    assign(node, target) {
        if (!target) {
            target = this.current;
        }
        const keys = Object.keys(node.attributes);
        for (let k of keys) {
            target[k] = node.attributes[k];
        }
    }
}
exports.XsdParser = XsdParser;
//# sourceMappingURL=xsd-parser.js.map