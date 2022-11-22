/// <reference types="node" />
import { AsciiParserState } from './ascii-parser-state';
import { MsgParser } from '../msg-parser';
import { Readable } from 'stream';
import { ElasticBuffer } from '../elastic-buffer';
import { IJsFixConfig } from '../../config';
export declare class AsciiParser extends MsgParser {
    readonly config: IJsFixConfig;
    readonly readStream: Readable;
    protected readonly receivingBuffer: ElasticBuffer;
    private static nextId;
    readonly id: number;
    readonly state: AsciiParserState;
    private readonly segmentParser;
    readonly delimiter: number;
    readonly writeDelimiter: number;
    constructor(config: IJsFixConfig, readStream: Readable, receivingBuffer: ElasticBuffer);
    private subscribe;
    private msg;
    parseText(text: string): void;
    private parse;
    private getView;
}
