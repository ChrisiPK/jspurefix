/// <reference types="node" />
import { SimpleFieldDefinition } from '../../dictionary/definition';
import { SegmentDescription } from '../segment/segment-description';
import { Structure } from '../structure';
import { MsgView } from '../msg-view';
import { ElasticBuffer } from '../elastic-buffer';
export declare class AsciiView extends MsgView {
    readonly segment: SegmentDescription;
    readonly buffer: ElasticBuffer;
    readonly structure: Structure;
    readonly ptr: number;
    readonly delimiter: number;
    readonly writeDelimiter: number;
    private readonly timeFormatter;
    constructor(segment: SegmentDescription, buffer: ElasticBuffer, structure: Structure, ptr: number, delimiter: number, writeDelimiter: number);
    clone(): MsgView;
    private replaceDelimiter;
    toBuffer(replaceDelimiter?: number): Buffer;
    checksum(): number;
    protected toTyped(field: SimpleFieldDefinition): any;
    protected create(singleton: SegmentDescription): MsgView;
    protected stringAtPosition(position: number): string;
    private getBuffer;
    private getNumber;
    private getTime;
    private getDate;
    private getDateTime;
    private getBoolean;
}
