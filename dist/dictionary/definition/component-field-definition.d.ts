import { ContainedFieldSet } from '../contained';
export declare class ComponentFieldDefinition extends ContainedFieldSet {
    readonly name: string;
    readonly abbreviation: string;
    readonly category: string;
    readonly description: string;
    constructor(name: string, abbreviation: string, category: string, description: string);
    getPrefix(): string;
}
