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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsciiParserState = void 0;
const tags_1 = require("../tag/tags");
const elastic_buffer_1 = require("../elastic-buffer");
const parse_state_1 = require("./parse-state");
const tsyringe_1 = require("tsyringe");
const di_tokens_1 = require("../../runtime/di-tokens");
let AsciiParserState = class AsciiParserState {
    constructor(elasticBuffer) {
        this.elasticBuffer = elasticBuffer;
    }
    beginTag(pos) {
        this.parseState = parse_state_1.ParseState.ParsingTag;
        this.tagStartPos = pos;
        this.equalPos = this.valueEndPos = -1;
        this.currentTag = 0;
    }
    endTag(pos) {
        this.equalPos = pos;
        const state = this.parseState;
        switch (state) {
            case parse_state_1.ParseState.ParsingTag: {
                this.currentTag = this.elasticBuffer.getWholeNumber(this.tagStartPos, pos - 1);
                break;
            }
            default:
                throw new Error(`EndTag: unexpected state ${state}`);
        }
        this.checkRawTag();
    }
    incRaw() {
        ++this.rawDataRead;
        return this.rawDataRead === this.rawDataLen + 1;
    }
    checkRawTag() {
        const msg = this.message;
        if (!msg || !msg.containsRaw) {
            this.parseState = parse_state_1.ParseState.ParsingValue;
            return;
        }
        const isDataLength = msg.containedLength[this.currentTag];
        if (isDataLength) {
            this.parseState = parse_state_1.ParseState.ParsingRawDataLength;
        }
        else {
            this.rawDataRead = 0;
            const isData = this.rawDataLen > 0;
            if (isData) {
                this.parseState = parse_state_1.ParseState.ParsingRawData;
            }
            else {
                this.parseState = parse_state_1.ParseState.ParsingValue;
            }
        }
    }
    store() {
        const valueEndPos = this.elasticBuffer.getPos() - 1;
        this.valueEndPos = valueEndPos;
        const equalPos = this.equalPos;
        const tag = this.currentTag;
        const locations = this.locations;
        const buffer = this.elasticBuffer;
        const terminates = this.checksumExpectedPos;
        switch (this.parseState) {
            case parse_state_1.ParseState.ParsingValue:
            case parse_state_1.ParseState.ParsingRawData: {
                this.rawDataLen = 0;
                locations.store(equalPos + 1, valueEndPos - equalPos - 1, tag);
                break;
            }
            case parse_state_1.ParseState.ParsingRawDataLength: {
                this.rawDataLen = buffer.getWholeNumber(equalPos + 1, valueEndPos - 1);
                locations.store(equalPos + 1, valueEndPos - equalPos - 1, tag);
                break;
            }
        }
        this.parseState = parse_state_1.ParseState.BeginField;
        this.count++;
        const nextTagPos = locations.nextTagPos;
        switch (tag) {
            case tags_1.Tags.BeginString: {
                if (nextTagPos !== 1) {
                    throw new Error(`BeginString: not expected at position [${nextTagPos}]`);
                }
                break;
            }
            case tags_1.Tags.BodyLengthTag: {
                if (nextTagPos !== 2) {
                    throw new Error(`BodyLengthTag: not expected at position [${nextTagPos}]`);
                }
                this.bodyLen = buffer.getWholeNumber(equalPos + 1, valueEndPos - 1);
                this.checksumExpectedPos = this.bodyLen + valueEndPos;
                this.elasticBuffer.checkGrowBuffer(this.bodyLen);
                break;
            }
            case tags_1.Tags.MsgTag: {
                if (nextTagPos !== 3) {
                    throw new Error(`MsgTag: not expected at position [${nextTagPos}]`);
                }
                this.msgType = buffer.getString(equalPos + 1, valueEndPos);
                this.message = locations.definitions.message.get(this.msgType);
                break;
            }
            case tags_1.Tags.CheckSumTag: {
                if (valueEndPos < this.bodyLen) {
                    throw new Error(`CheckSumTag: [${valueEndPos}] expected after ${this.bodyLen}`);
                }
                this.parseState = parse_state_1.ParseState.MsgComplete;
                break;
            }
            default: {
                if (terminates && valueEndPos > terminates) {
                    throw new Error(`Tag: [${tag}] cant be after ${terminates}`);
                }
                break;
            }
        }
        switch (nextTagPos) {
            case 1: {
                if (tag !== tags_1.Tags.BeginString) {
                    throw new Error(`position 1 [${tag}] must be BeginString: 8=`);
                }
                break;
            }
            case 2: {
                if (tag !== tags_1.Tags.BodyLengthTag) {
                    throw new Error(`position 2 [${tag}] must be BodyLengthTag: 9=`);
                }
                break;
            }
            case 3: {
                if (tag !== tags_1.Tags.MsgTag) {
                    throw new Error(`position 3 [${tag}] must be MsgTag: 35=`);
                }
                break;
            }
        }
    }
    beginMessage() {
        this.elasticBuffer.reset();
        this.locations.reset();
        this.checksumExpectedPos = 0;
        this.parseState = parse_state_1.ParseState.BeginField;
        this.count = 0;
        this.currentTag = 0;
        this.tagStartPos = 0;
        this.valueEndPos = 0;
        this.equalPos = 0;
        this.rawDataRead = 0;
        this.rawDataLen = 0;
        this.bodyLen = 0;
        this.message = null;
        this.msgType = null;
    }
};
AsciiParserState = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(di_tokens_1.DITokens.ParseBuffer)),
    __metadata("design:paramtypes", [elastic_buffer_1.ElasticBuffer])
], AsciiParserState);
exports.AsciiParserState = AsciiParserState;
//# sourceMappingURL=ascii-parser-state.js.map