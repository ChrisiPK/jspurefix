/// <reference types="node" />
export declare class ElasticBuffer {
    readonly size: number;
    readonly returnTo: number;
    private buffer;
    private ptr;
    private stretched;
    constructor(size?: number, returnTo?: number);
    private static precisionRound;
    private static HowManyDigits;
    currentSize(): number;
    getPos(): number;
    setPos(ptr: number): number;
    get(pos: number): number;
    writeBoolean(v: boolean): number;
    switchChar(c: number): number;
    saveChar(c: number): number;
    writeChar(c: number): number;
    writeString(s: string): number;
    writeBuffer(v: Buffer): number;
    writeWholeNumber(n: number): number;
    writeNumber(v: number, places?: number): number;
    reset(): boolean;
    slice(): Buffer;
    copy(): Buffer;
    clone(): ElasticBuffer;
    writePaddedHundreds(v: number): number;
    writePaddedTensUnits(v: number): number;
    patchPaddedNumberAtPos(ptr: number, numToWrite: number, padding: number): void;
    toString(ptr?: number): string;
    checksum(ptr?: number): number;
    sum(ptr?: number): number;
    getWholeNumber(start: number, vend: number): number;
    getString(start: number, end: number): string;
    getBuffer(start: number, end: number): Buffer;
    getBoolean(start: number): boolean;
    getFloat(start: number, vend: number): number;
    checkGrowBuffer(required: number): void;
}
