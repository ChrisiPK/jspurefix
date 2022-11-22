export interface INumericKeyed<T> {
    [prop: number]: T;
}
export interface ILooseObject {
    [prop: string]: any;
}
export declare type IDictIteratorCb<T> = (key: string, val: T) => void;
