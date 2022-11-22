import { ILooseObject } from '../collections/collection';
import { ContainedFieldSet, FieldsDispatch } from '../dictionary/contained';
import { FixDefinitions } from '../dictionary/definition';
export declare class JsonHelper {
    readonly definitions: FixDefinitions;
    dispatcher: FieldsDispatch;
    constructor(definitions: FixDefinitions);
    private static patchSimple;
    fromJson(fileName: string, msgType: string): ILooseObject;
    patchJsonFields(set: ContainedFieldSet, object: ILooseObject): void;
    private patchComponent;
    private patchGroup;
}
