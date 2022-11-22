"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ElasticBuffer_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElasticBuffer = void 0;
const ascii_chars_1 = require("./ascii/ascii-chars");
const mathjs_1 = require("mathjs");
const tsyringe_1 = require("tsyringe");
const di_tokens_1 = require("../runtime/di-tokens");
let ElasticBuffer = ElasticBuffer_1 = class ElasticBuffer {
    constructor(size = 6 * 1024, returnTo = 6 * 1024) {
        this.size = size;
        this.returnTo = returnTo;
        this.ptr = 0;
        this.size = Math.max(1, this.size);
        this.buffer = Buffer.allocUnsafe(this.size);
        this.returnTo = Math.max(this.size, this.returnTo);
        this.stretched = this.size;
    }
    static precisionRound(n, precision) {
        const factor = Math.pow(10, precision);
        return Math.round(n * factor) / factor;
    }
    static HowManyDigits(v) {
        v = Math.abs(v);
        let digits = 0;
        let w = v;
        while (w > 0) {
            ++digits;
            w = Math.floor(w / 10);
        }
        return Math.max(digits, 1);
    }
    currentSize() {
        return this.stretched;
    }
    getPos() {
        return this.ptr;
    }
    setPos(ptr) {
        const r = this.ptr;
        if (ptr >= 0 && ptr <= this.size) {
            this.ptr = ptr;
        }
        return r;
    }
    get(pos) {
        return this.buffer[pos];
    }
    writeBoolean(v) {
        this.writeChar(v ? ascii_chars_1.AsciiChars.Y : ascii_chars_1.AsciiChars.N);
        return this.ptr;
    }
    switchChar(c) {
        this.buffer[this.ptr - 1] = c;
        return this.ptr;
    }
    saveChar(c) {
        this.buffer[this.ptr++] = c;
        return this.ptr;
    }
    writeChar(c) {
        if (c > 255)
            throw new Error(`can't write ${c} to a byte`);
        this.checkGrowBuffer(1);
        this.buffer[this.ptr++] = c;
        return this.ptr;
    }
    writeString(s) {
        const begin = this.ptr;
        this.checkGrowBuffer(s.length);
        const buffer = this.buffer;
        this.ptr += buffer.write(s, begin, s.length, 'ascii');
        return this.ptr;
    }
    writeBuffer(v) {
        const begin = this.ptr;
        this.checkGrowBuffer(v.length);
        const buffer = this.buffer;
        const srcLen = v.length;
        this.ptr += v.copy(buffer, begin, 0, srcLen);
        return this.ptr;
    }
    writeWholeNumber(n) {
        const digits = ElasticBuffer_1.HowManyDigits(n);
        let reserve = digits;
        const sign = Math.sign(n);
        let p = Math.pow(10, digits - 1);
        let v = Math.abs(n);
        if (sign < 0) {
            reserve++;
        }
        this.checkGrowBuffer(reserve);
        const buffer = this.buffer;
        if (sign < 0) {
            buffer[this.ptr++] = ascii_chars_1.AsciiChars.Minus;
        }
        while (p >= 1) {
            const d = Math.floor(v / p);
            v -= d * p;
            p /= 10;
            buffer[this.ptr++] = ascii_chars_1.AsciiChars.Zero + d;
        }
        return this.ptr;
    }
    writeNumber(v, places = 13) {
        const rounded = Math.floor(v);
        const fraction = ElasticBuffer_1.precisionRound(v - rounded, places);
        if (fraction === 0) {
            return this.writeWholeNumber(v);
        }
        else {
            const s = (0, mathjs_1.format)(v, { notation: 'fixed' });
            return this.writeString(s);
        }
    }
    reset() {
        this.ptr = 0;
        const shrink = this.stretched > this.returnTo;
        if (shrink) {
            this.buffer = Buffer.allocUnsafe(this.returnTo);
            this.stretched = this.size;
        }
        return shrink;
    }
    slice() {
        return this.buffer.slice(0, this.ptr);
    }
    copy() {
        const m = Buffer.alloc(this.ptr);
        this.buffer.copy(m, 0, 0, this.ptr);
        return m;
    }
    clone() {
        const cloned = new ElasticBuffer_1(this.ptr);
        this.buffer.copy(cloned.buffer, 0, 0, this.ptr);
        cloned.setPos(this.ptr);
        return cloned;
    }
    writePaddedHundreds(v) {
        if (v > 999)
            throw new Error(`can't write ${v} as hundreds padding`);
        this.checkGrowBuffer(3);
        const buffer = this.buffer;
        const zero = ascii_chars_1.AsciiChars.Zero;
        const units = v % 10 + zero;
        v = v / 10;
        const tens = v % 10 + zero;
        v = v / 10;
        buffer[this.ptr++] = v % 10 + zero;
        buffer[this.ptr++] = tens;
        buffer[this.ptr++] = units;
        return this.ptr;
    }
    writePaddedTensUnits(v) {
        if (v > 99)
            throw new Error(`can't write ${v} as hundreds padding`);
        this.checkGrowBuffer(2);
        const buffer = this.buffer;
        const zero = ascii_chars_1.AsciiChars.Zero;
        const units = v % 10 + zero;
        v = v / 10;
        buffer[this.ptr++] = v % 10 + zero;
        buffer[this.ptr++] = units;
        return this.ptr;
    }
    patchPaddedNumberAtPos(ptr, numToWrite, padding) {
        let digits = ElasticBuffer_1.HowManyDigits(numToWrite);
        const saved = this.ptr;
        this.ptr = ptr;
        const buffer = this.buffer;
        while (digits++ < padding) {
            buffer[this.ptr++] = ascii_chars_1.AsciiChars.Zero;
        }
        this.writeWholeNumber(numToWrite);
        this.ptr = saved;
    }
    toString(ptr = this.ptr) {
        return this.buffer.toString('ascii', 0, ptr);
    }
    checksum(ptr = this.ptr) {
        const cks = this.sum(ptr);
        return cks % 256;
    }
    sum(ptr = this.ptr) {
        let total = 0;
        ptr = Math.min(ptr, this.ptr);
        const buffer = this.buffer;
        for (let idx = 0; idx < ptr; idx++) {
            total += buffer[idx];
        }
        return total;
    }
    getWholeNumber(start, vend) {
        const buffer = this.buffer;
        let sign = 1;
        let raised = vend - start;
        switch (buffer[start]) {
            case ascii_chars_1.AsciiChars.Minus: {
                --raised;
                sign = -1;
                ++start;
                break;
            }
            case ascii_chars_1.AsciiChars.Plus: {
                --raised;
                ++start;
                break;
            }
        }
        let i = Math.pow(10, raised);
        let num = 0;
        let scan = start;
        while (scan <= vend) {
            const p = buffer[scan++];
            const d = p - ascii_chars_1.AsciiChars.Zero;
            num += d * i;
            i /= 10;
        }
        return num * sign;
    }
    getString(start, end) {
        return this.buffer.toString('ascii', start, end);
    }
    getBuffer(start, end) {
        return this.buffer.slice(start, end);
    }
    getBoolean(start) {
        const b = this.buffer[start];
        return b === ascii_chars_1.AsciiChars.Y;
    }
    getFloat(start, vend) {
        let n = 0;
        let digits = 0;
        let dotPosition = 0;
        const buffer = this.buffer;
        let sign = 1;
        switch (buffer[start]) {
            case ascii_chars_1.AsciiChars.Minus: {
                sign = -1;
                start++;
                break;
            }
            case ascii_chars_1.AsciiChars.Plus: {
                start++;
                break;
            }
        }
        const len = vend - start;
        let i = Math.pow(10, len - 1);
        for (let j = start; j <= vend; ++j) {
            const p = buffer[j];
            if (p >= ascii_chars_1.AsciiChars.Zero && p <= ascii_chars_1.AsciiChars.Nine) {
                const d = p - ascii_chars_1.AsciiChars.Zero;
                ++digits;
                n += d * i;
                i /= 10;
            }
            else if (p === ascii_chars_1.AsciiChars.Dot) {
                if (dotPosition > 0) {
                    return null;
                }
                dotPosition = j - start;
            }
            else if (digits > 0) {
                return null;
            }
        }
        const power = dotPosition === 0 ? 0 : len - dotPosition;
        const raised = dotPosition === 0 ? 10 : Math.pow(10, -1 * power);
        const round = dotPosition === 0 ? 1 : Math.pow(10, power);
        const val = n * raised * sign;
        return Math.round(val * round) / round;
    }
    checkGrowBuffer(required) {
        let buffer = this.buffer;
        let size = buffer.length;
        const ptr = this.ptr;
        if (size - ptr >= required) {
            return;
        }
        while (size - ptr < required) {
            size *= 2;
        }
        const old = buffer;
        buffer = Buffer.allocUnsafe(size);
        old.copy(buffer, 0, 0, this.ptr);
        this.buffer = buffer;
        this.stretched = size;
    }
};
ElasticBuffer = ElasticBuffer_1 = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(di_tokens_1.DITokens.elasticBufferSize)),
    __param(1, (0, tsyringe_1.inject)(di_tokens_1.DITokens.elasticBufferReturnSize)),
    __metadata("design:paramtypes", [Number, Number])
], ElasticBuffer);
exports.ElasticBuffer = ElasticBuffer;
//# sourceMappingURL=elastic-buffer.js.map