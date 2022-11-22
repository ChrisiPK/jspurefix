import { Dictionary } from '../../collections';
import { FieldEnum } from '../field-enum';
import { TagType } from '../../buffer/tag/tag-type';
export declare class SimpleFieldDefinition {
    readonly num: string;
    readonly name: string;
    readonly abbreviation: string;
    readonly baseCategory: string;
    readonly baseCategoryAbbreviation: string;
    readonly type: string;
    readonly description: string;
    readonly tag: number;
    readonly tagType: TagType;
    enums: Dictionary<FieldEnum>;
    enumVals: Dictionary<boolean>;
    constructor(num: string, name: string, abbreviation: string, baseCategory: string, baseCategoryAbbreviation: string, type: string, description: string);
    isEnum(): boolean;
    containsEnum(key: string): boolean;
    resolveEnum(key: string): string;
    patchEnumValue(v: string): string;
    addEnum(key: string, val: string, description?: string): void;
    toString(): string;
}
