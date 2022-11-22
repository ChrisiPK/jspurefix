/// <reference types="node" />
/// <reference types="node" />
import { ILooseObject } from '../collections/collection';
import { FixDefinitions } from '../dictionary/definition';
import { ContainedFieldSet } from '../dictionary/contained';
import * as events from 'events';
export declare abstract class MsgEncoder extends events.EventEmitter {
    readonly definitions: FixDefinitions;
    protected constructor(definitions: FixDefinitions);
    encode(o: ILooseObject, name: string): void;
    abstract reset(): void;
    abstract trim(): Buffer;
    abstract encodeSet(o: ILooseObject, set: ContainedFieldSet): void;
}
