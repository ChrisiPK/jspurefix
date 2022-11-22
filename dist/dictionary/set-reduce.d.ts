import { ContainedField, ContainedFieldSet } from './contained';
import { ITypeDispatcher } from './type-dispatcher';
export declare class SetReduce<T> {
    reduceField(a: T, field: ContainedField, dispatcher: ITypeDispatcher<T>): void;
    reduce(def: ContainedFieldSet, dispatcher: ITypeDispatcher<T>, init: T): T;
}
