import { ContainedField, ContainedFieldSet } from '../contained';
import { FixDefinitions } from '../definition';
export declare class CompilerType {
    readonly definitions: FixDefinitions;
    readonly set: ContainedFieldSet;
    readonly qualifiedName: string;
    readonly snaked: string;
    constructor(definitions: FixDefinitions, set: ContainedFieldSet, qualifiedName: string);
    getExtended(field: ContainedField): string;
    getFieldGroupName(field: ContainedField): string;
}
