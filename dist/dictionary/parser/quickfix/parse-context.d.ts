import { ContainedFieldSet } from '../../contained';
import { ComponentFieldDefinition, GroupFieldDefinition, MessageDefinition } from '../../definition';
export declare class ParseContext {
    name: string;
    defining: boolean;
    set: ContainedFieldSet;
    required: boolean;
    constructor(name: string, defining: boolean, set: ContainedFieldSet);
    asMessage(): MessageDefinition;
    asComponent(): ComponentFieldDefinition;
    asGroup(): GroupFieldDefinition;
}
