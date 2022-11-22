"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeFormatter = void 0;
const ascii_chars_1 = require("./ascii-chars");
class TimeFormatter {
    constructor(buffer, adjustLocal = false) {
        this.buffer = buffer;
        this.adjustLocal = adjustLocal;
    }
    writeLocalDate(v) {
        const buffer = this.buffer;
        buffer.writeWholeNumber(v.getFullYear());
        buffer.writePaddedTensUnits(v.getMonth() + 1);
        buffer.writePaddedTensUnits(v.getDate());
    }
    writeUtcDate(v) {
        const buffer = this.buffer;
        buffer.writeWholeNumber(v.getUTCFullYear());
        buffer.writePaddedTensUnits(v.getUTCMonth() + 1);
        buffer.writePaddedTensUnits(v.getUTCDate());
    }
    writeUtcTimestamp(v) {
        this.writeUtcDate(v);
        this.buffer.writeChar(ascii_chars_1.AsciiChars.Hyphen);
        this.writeUtcTime(v);
    }
    writeLocalTimestamp(v) {
        this.writeLocalDate(v);
        this.buffer.writeChar(ascii_chars_1.AsciiChars.Hyphen);
        this.writeLocalTime(v);
    }
    writeUtcTime(v) {
        const buffer = this.buffer;
        buffer.writePaddedTensUnits(v.getUTCHours());
        buffer.writeChar(ascii_chars_1.AsciiChars.Colon);
        buffer.writePaddedTensUnits(v.getUTCMinutes());
        buffer.writeChar(ascii_chars_1.AsciiChars.Colon);
        buffer.writePaddedTensUnits(v.getUTCSeconds());
        const ms = v.getUTCMilliseconds();
        buffer.writeChar(ascii_chars_1.AsciiChars.Dot);
        buffer.writePaddedHundreds(ms);
    }
    writeLocalTime(v) {
        const buffer = this.buffer;
        buffer.writePaddedTensUnits(v.getHours());
        buffer.writeChar(ascii_chars_1.AsciiChars.Colon);
        buffer.writePaddedTensUnits(v.getMinutes());
        buffer.writeChar(ascii_chars_1.AsciiChars.Colon);
        buffer.writePaddedTensUnits(v.getSeconds());
        const ms = v.getMilliseconds();
        buffer.writeChar(ascii_chars_1.AsciiChars.Dot);
        buffer.writePaddedHundreds(ms);
    }
    getLocalTime(start) {
        return this.getTime(start, false);
    }
    getUtcTime(start) {
        return this.getTime(start, true);
    }
    getUtcDate(start) {
        return this.getDate(start, true);
    }
    getLocalDate(start) {
        return this.getDate(start, false);
    }
    getUtcTimestamp(start, end) {
        return this.getTimestamp(start, end, true);
    }
    getLocalTimestamp(start, end) {
        return this.getTimestamp(start, end, false);
    }
    getTimestamp(start, end, useUtc) {
        const buffer = this.buffer;
        const n = buffer.getWholeNumber(start, start + 7);
        if (n == null) {
            return null;
        }
        const monthDay = n % 10000;
        const month = Math.round(monthDay / 100);
        const day = monthDay % 100;
        const year = Math.round(n / 10000);
        const len = end - start;
        if (len === 8) {
            let t;
            if (useUtc) {
                t = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0));
            }
            else {
                t = new Date(year, month - 1, day, 0, 0, 0, 0);
            }
            if (this.adjustLocal) {
                t = new Date(t.getTime() - t.getTimezoneOffset() * -60000);
            }
            return t;
        }
        let offset = 8;
        if (buffer.get(start + offset) !== ascii_chars_1.AsciiChars.Hyphen) {
            return null;
        }
        if (len < 17) {
            return null;
        }
        offset += 1;
        const hh = buffer.getWholeNumber(start + offset, start + offset + 1);
        offset += 2;
        if (buffer.get(start + offset) !== ascii_chars_1.AsciiChars.Colon) {
            return null;
        }
        offset += 1;
        const mm = buffer.getWholeNumber(start + offset, start + offset + 1);
        offset += 2;
        if (buffer.get(start + offset) !== ascii_chars_1.AsciiChars.Colon) {
            return null;
        }
        offset += 1;
        const ss = buffer.getWholeNumber(start + offset, start + offset + 1);
        offset += 2;
        let ms = 0;
        if (buffer.get(start + offset) === ascii_chars_1.AsciiChars.Dot) {
            offset += 1;
            ms = buffer.getWholeNumber(start + offset, start + offset + 2);
        }
        let t;
        if (useUtc) {
            t = new Date(Date.UTC(year, month - 1, day, hh, mm, ss, ms));
        }
        else {
            t = new Date(year, month - 1, day, hh, mm, ss, ms);
            if (this.adjustLocal) {
                t = new Date(t.getTime() - t.getTimezoneOffset() * -60000);
            }
        }
        return t;
    }
    getTime(start, useUtc) {
        const buffer = this.buffer;
        let offset = 0;
        const hh = buffer.getWholeNumber(start + offset, start + offset + 1);
        offset += 2;
        if (buffer.get(start + offset) !== ascii_chars_1.AsciiChars.Colon) {
            return null;
        }
        offset += 1;
        const mm = buffer.getWholeNumber(start + offset, start + offset + 1);
        offset += 2;
        if (buffer.get(start + offset) !== ascii_chars_1.AsciiChars.Colon) {
            return null;
        }
        offset += 1;
        const ss = buffer.getWholeNumber(start + offset, start + offset + 1);
        offset += 2;
        let ms = 0;
        if (buffer.get(start + offset) === ascii_chars_1.AsciiChars.Dot) {
            offset += 1;
            ms = buffer.getWholeNumber(start + offset, start + offset + 2);
        }
        let t;
        if (useUtc) {
            t = new Date(Date.UTC(0, 0, 0, hh, mm, ss, ms));
        }
        else {
            t = new Date(0, 0, 0, hh, mm, ss, ms);
            if (this.adjustLocal) {
                t = new Date(t.getTime() - t.getTimezoneOffset() * -60000);
            }
        }
        return t;
    }
    getDate(start, useUtc) {
        const n = this.buffer.getWholeNumber(start, start + 7);
        if (n == null) {
            return null;
        }
        const monthDay = n % 10000;
        const month = Math.round(monthDay / 100);
        const day = monthDay % 100;
        const year = Math.round(n / 10000);
        let t;
        if (useUtc) {
            t = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0));
        }
        else {
            t = new Date(year, month - 1, day, 0, 0, 0, 0);
            if (this.adjustLocal) {
                t = new Date(t.getTime() - t.getTimezoneOffset() * -60000);
            }
        }
        return t;
    }
}
exports.TimeFormatter = TimeFormatter;
//# sourceMappingURL=time-formatter.js.map