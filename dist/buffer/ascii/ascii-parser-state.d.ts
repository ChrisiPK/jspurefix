import { Tags } from '../tag/tags';
import { MessageDefinition } from '../../dictionary/definition';
import { ElasticBuffer } from '../elastic-buffer';
import { ParseState } from './parse-state';
export declare class AsciiParserState {
    readonly elasticBuffer: ElasticBuffer;
    message: MessageDefinition;
    locations: Tags;
    parseState: ParseState;
    bodyLen: number;
    checksumExpectedPos: number;
    tagStartPos: number;
    equalPos: number;
    valueEndPos: number;
    count: number;
    currentTag: number;
    rawDataLen: number;
    rawDataRead: number;
    msgType: string;
    constructor(elasticBuffer: ElasticBuffer);
    beginTag(pos: number): void;
    endTag(pos: number): void;
    incRaw(): boolean;
    checkRawTag(): void;
    store(): void;
    beginMessage(): void;
}
