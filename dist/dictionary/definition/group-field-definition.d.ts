import { ContainedFieldSet } from '../contained';
import { SimpleFieldDefinition } from './simple-field-definition';
export declare class GroupFieldDefinition extends ContainedFieldSet {
    readonly name: string;
    readonly abbreviation: string;
    readonly category: string;
    readonly noOfField: SimpleFieldDefinition;
    readonly description: string;
    constructor(name: string, abbreviation: string, category: string, noOfField: SimpleFieldDefinition, description: string);
    getPrefix(): string;
}
