import { ContainedField } from './contained-field';
import { SimpleFieldDefinition } from '../definition';
export declare class ContainedSimpleField extends ContainedField {
    readonly definition: SimpleFieldDefinition;
    readonly position: number;
    readonly required: boolean;
    readonly attribute: boolean;
    readonly override?: string;
    constructor(definition: SimpleFieldDefinition, position: number, required: boolean, attribute: boolean, override?: string);
    toString(): string;
}
