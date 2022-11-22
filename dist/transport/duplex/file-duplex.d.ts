import { FixDuplex } from './fix-duplex';
export declare class FileDuplex extends FixDuplex {
    readonly fileName: string;
    constructor(fileName: string);
    private static makeReadable;
    end(): void;
}
