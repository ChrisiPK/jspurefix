import { ContainedFieldType } from './contained-field-type';
export declare class ContainedField {
    readonly name: string;
    readonly position: number;
    readonly type: ContainedFieldType;
    readonly required: boolean;
    constructor(name: string, position: number, type: ContainedFieldType, required: boolean);
}
