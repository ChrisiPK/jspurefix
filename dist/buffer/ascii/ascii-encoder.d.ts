/// <reference types="node" />
import { ILooseObject } from '../../collections/collection';
import { ContainedFieldSet } from '../../dictionary/contained';
import { FixDefinitions } from '../../dictionary/definition';
import { MsgEncoder } from '../msg-encoder';
import { ElasticBuffer } from '../elastic-buffer';
import { ITimeFormatter } from './itime-formatter';
import { Tags } from '../tag/tags';
export declare class AsciiEncoder extends MsgEncoder {
    readonly buffer: ElasticBuffer;
    readonly definitions: FixDefinitions;
    readonly timeFormatter: ITimeFormatter;
    readonly delimiter: number;
    readonly logDelimiter: number;
    bodyLengthPos: number;
    msgTypePos: number;
    tags: Tags;
    checkGroups: boolean;
    constructor(buffer: ElasticBuffer, definitions: FixDefinitions, timeFormatter?: ITimeFormatter, delimiter?: number, logDelimiter?: number);
    trim(): Buffer;
    reset(): void;
    encodeSet(objectToEncode: ILooseObject, set: ContainedFieldSet): void;
    private encodeObject;
    private getFields;
    private encodeInstances;
    private WriteTagEquals;
    private writeDelimiter;
    private encodeSimple;
}
