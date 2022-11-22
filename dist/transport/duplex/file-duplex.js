"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDuplex = void 0;
const fix_duplex_1 = require("./fix-duplex");
class FileDuplex extends fix_duplex_1.FixDuplex {
    constructor(fileName) {
        super();
        this.fileName = fileName;
        this.readable = FileDuplex.makeReadable(fileName);
    }
    static makeReadable(fileName) {
        const fs = require('fs');
        return fs.createReadStream(fileName);
    }
    end() {
    }
}
exports.FileDuplex = FileDuplex;
//# sourceMappingURL=file-duplex.js.map