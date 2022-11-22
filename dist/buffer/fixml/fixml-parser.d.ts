/// <reference types="node" />
import { MsgParser } from '../msg-parser';
import { IJsFixConfig } from '../../config';
import { Readable } from 'stream';
export declare class FiXmlParser extends MsgParser {
    readonly config: IJsFixConfig;
    readonly readStream: Readable;
    readonly maxMessageLocations: number;
    private readonly locations;
    private values;
    private readonly saxStream;
    private readonly definitions;
    private readonly segments;
    private readonly segmentStack;
    private readonly logger;
    private last;
    private raw;
    constructor(config: IJsFixConfig, readStream: Readable, maxMessageLocations?: number);
    private reset;
    private subscribe;
    private hdr;
    private msgInBatch;
    private getView;
    private pop;
    private startGroup;
    private getNextField;
    private dispatch;
    private dispatchGroup;
    private element;
    private msg;
    private parseAttributes;
}
