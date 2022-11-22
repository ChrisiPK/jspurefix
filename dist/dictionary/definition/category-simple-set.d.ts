import { SimpleFieldDefinition } from './simple-field-definition';
import { Dictionary } from '../../collections';
export declare class CategorySimpleSet {
    readonly category: string;
    readonly simple: Dictionary<SimpleFieldDefinition>;
    constructor(category: string);
}
