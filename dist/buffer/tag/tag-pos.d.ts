export declare class TagPos {
    position: number;
    tag: number;
    start: number;
    len: number;
    constructor(position: number, tag: number, start: number, len: number);
    static compare(lhs: TagPos, rhs: TagPos): number;
    static binarySearch(ar: TagPos[], tag: number): number;
    assign(position: number, tag: number, start: number, len: number): void;
    toString(): string;
    clone(): TagPos;
}
