import { ContainedField } from './contained-field';
import { GroupFieldDefinition } from '../definition';
export declare class ContainedGroupField extends ContainedField {
    readonly definition: GroupFieldDefinition;
    readonly position: number;
    readonly required: boolean;
    readonly override?: string;
    constructor(definition: GroupFieldDefinition, position: number, required: boolean, override?: string);
    toString(): string;
}
