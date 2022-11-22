import { FixDuplex } from './fix-duplex';
export declare class StringDuplex extends FixDuplex {
    readonly text: string;
    chunks: boolean;
    constructor(text?: string, chunks?: boolean);
    private static makeReadable;
    private static makeWritable;
    private static sendReaderChunks;
    end(): void;
}
