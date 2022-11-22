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
var AsciiParser_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsciiParser = void 0;
const ascii_chars_1 = require("./ascii-chars");
const ascii_view_1 = require("./ascii-view");
const ascii_segment_parser_1 = require("./ascii-segment-parser");
const ascii_parser_state_1 = require("./ascii-parser-state");
const structure_1 = require("../structure");
const tags_1 = require("../tag/tags");
const msg_parser_1 = require("../msg-parser");
const stream_1 = require("stream");
const elastic_buffer_1 = require("../elastic-buffer");
const segment_description_1 = require("../segment/segment-description");
const parse_state_1 = require("./parse-state");
const tsyringe_1 = require("tsyringe");
const di_tokens_1 = require("../../runtime/di-tokens");
const segment_type_1 = require("../segment/segment-type");
let AsciiParser = AsciiParser_1 = class AsciiParser extends msg_parser_1.MsgParser {
    constructor(config, readStream, receivingBuffer) {
        super();
        this.config = config;
        this.readStream = readStream;
        this.receivingBuffer = receivingBuffer;
        this.delimiter = config.delimiter;
        this.writeDelimiter = config.logDelimiter || ascii_chars_1.AsciiChars.Pipe;
        const definitions = config.definitions;
        this.id = AsciiParser_1.nextId++;
        this.segmentParser = config.sessionContainer.resolve(ascii_segment_parser_1.AsciiSegmentParser);
        this.state = config.sessionContainer.resolve(ascii_parser_state_1.AsciiParserState);
        this.state.locations = new tags_1.Tags(definitions, this.receivingBuffer.size / 10);
        this.state.beginMessage();
        if (readStream !== null) {
            this.subscribe();
        }
    }
    subscribe() {
        const inst = this;
        const Writable = require('stream').Writable;
        const stream = this.readStream;
        const receiver = new Writable({
            write: (data, _, done) => {
                try {
                    inst.parse(data, data.length);
                    done();
                }
                catch (e) {
                    done(e);
                }
            }
        });
        receiver.on('error', (e) => {
            this.emit('error', e);
        });
        stream.pipe(receiver).on('finish', () => {
            this.emit('done');
        });
        stream.on('error', (e) => {
            this.emit('error', e);
        });
        stream.on('end', () => {
            this.emit('end');
        });
    }
    msg(ptr) {
        const receivingBuffer = this.receivingBuffer;
        const state = this.state;
        if (this.listeners('decoded')) {
            this.emit('decoded', state.msgType, receivingBuffer, ptr);
        }
        this.emit('msg', state.msgType, this.getView(ptr));
        state.beginMessage();
    }
    parseText(text) {
        const buff = Buffer.from(text);
        this.parse(buff, buff.length);
    }
    parse(readBuffer, end) {
        const state = this.state;
        const eq = ascii_chars_1.AsciiChars.Eq;
        const zero = ascii_chars_1.AsciiChars.Zero;
        const nine = ascii_chars_1.AsciiChars.Nine;
        const delimiter = this.delimiter;
        const writeDelimiter = this.writeDelimiter;
        const receivingBuffer = this.receivingBuffer;
        const switchDelimiter = writeDelimiter !== delimiter;
        let readPtr = 0;
        while (readPtr < end) {
            let charAtPos = readBuffer[readPtr];
            const writePtr = receivingBuffer.saveChar(charAtPos) - 1;
            switch (state.parseState) {
                case parse_state_1.ParseState.MsgComplete: {
                    this.msg(writePtr);
                    continue;
                }
                case parse_state_1.ParseState.BeginField: {
                    const atDigit = charAtPos >= zero && charAtPos <= nine;
                    if (atDigit) {
                        state.beginTag(writePtr);
                    }
                    break;
                }
                case parse_state_1.ParseState.ParsingTag: {
                    const isEquals = charAtPos === eq;
                    if (isEquals) {
                        state.endTag(writePtr);
                    }
                    break;
                }
                case parse_state_1.ParseState.ParsingRawData: {
                    if (state.incRaw()) {
                        if (charAtPos === delimiter) {
                            if (switchDelimiter) {
                                receivingBuffer.switchChar(writeDelimiter);
                            }
                            state.store();
                        }
                        else {
                            throw new Error(`delimiter (${delimiter}) expected at position ${readPtr} when value is ${charAtPos}`);
                        }
                    }
                    break;
                }
                case parse_state_1.ParseState.ParsingRawDataLength:
                case parse_state_1.ParseState.ParsingValue: {
                    if (charAtPos === delimiter) {
                        if (switchDelimiter) {
                            receivingBuffer.switchChar(writeDelimiter);
                        }
                        state.store();
                    }
                    break;
                }
                default: {
                    throw new Error(`fix parser in unknown state ${state}`);
                }
            }
            readPtr++;
        }
        switch (state.parseState) {
            case parse_state_1.ParseState.MsgComplete: {
                this.msg(receivingBuffer.getPos());
                break;
            }
        }
    }
    getView(ptr) {
        const state = this.state;
        const locations = state.locations;
        const source = this.receivingBuffer;
        const delimiter = this.delimiter;
        const replace = this.writeDelimiter;
        if (state.message) {
            const structure = this.segmentParser.parse(state.msgType, locations, locations.nextTagPos - 1);
            return new ascii_view_1.AsciiView(structure.msg(), source, structure, ptr, delimiter, replace);
        }
        const structure = new structure_1.Structure(locations, []);
        const segment = new segment_description_1.SegmentDescription('unknown', locations.tagPos[0].tag, null, 0, 1, segment_type_1.SegmentType.Unknown);
        segment.endPosition = locations.nextTagPos - 1;
        return new ascii_view_1.AsciiView(segment, source, structure, ptr, delimiter, replace);
    }
};
AsciiParser.nextId = 0;
AsciiParser = AsciiParser_1 = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(di_tokens_1.DITokens.IJsFixConfig)),
    __param(1, (0, tsyringe_1.inject)(di_tokens_1.DITokens.readStream)),
    __param(2, (0, tsyringe_1.inject)(di_tokens_1.DITokens.ParseBuffer)),
    __metadata("design:paramtypes", [Object, stream_1.Readable,
        elastic_buffer_1.ElasticBuffer])
], AsciiParser);
exports.AsciiParser = AsciiParser;
//# sourceMappingURL=ascii-parser.js.map