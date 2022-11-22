import { IDictIteratorCb } from './collection';
export declare class Dictionary<T> {
    private container;
    count(): number;
    values(): T[];
    keys(): string[];
    toString(): string;
    containsKey(key: string): boolean;
    add(key: string, v: T): void;
    addUpdate(key: string, v: T): void;
    remove(key: string): void;
    get(key: string): T;
    clear(): void;
    forEach(cb: IDictIteratorCb<T>): void;
}
