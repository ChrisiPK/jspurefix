import { ContainedFieldSet } from '../contained';
export declare class MessageDefinition extends ContainedFieldSet {
    readonly name: string;
    readonly abbreviation: string;
    readonly msgType: string;
    readonly category: string;
    readonly description: string;
    constructor(name: string, abbreviation: string, msgType: string, category: string, description: string);
    getPrefix(): string;
}
