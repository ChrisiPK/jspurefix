import { ComponentFieldDefinition } from '../definition';
import { ContainedField } from './contained-field';
export declare class ContainedComponentField extends ContainedField {
    readonly definition: ComponentFieldDefinition;
    position: number;
    readonly required: boolean;
    readonly override?: string;
    constructor(definition: ComponentFieldDefinition, position: number, required: boolean, override?: string);
    toString(): string;
}
