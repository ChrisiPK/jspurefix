/// <reference types="node" />
import { ILooseObject } from '../../collections/collection';
import { ContainedFieldSet } from '../../dictionary/contained';
import { MsgEncoder } from '../msg-encoder';
import { ElasticBuffer } from '../elastic-buffer';
import { FixDefinitions } from '../../dictionary/definition';
export declare class FixmlEncoder extends MsgEncoder {
    readonly buffer: ElasticBuffer;
    readonly definitions: FixDefinitions;
    attributePerLine: boolean;
    readonly eol: string;
    private readonly beginDoc;
    private readonly endDoc;
    private readonly beginBatch;
    private readonly endBatch;
    constructor(buffer: ElasticBuffer, definitions: FixDefinitions);
    private static asString;
    encodeSet(o: ILooseObject, set: ContainedFieldSet): void;
    private batchStart;
    private toXml;
    private getPopulatedFields;
    private encodeAttribute;
    private attributes;
    private getPopulatedAttributes;
    private complexGroup;
    private complexComponent;
    reset(): void;
    trim(): Buffer;
}
