export declare class EncodedStatus {
    ptr: number;
    bodyLengthPos: number;
    bodyEndPos: number;
    begin: Date;
    end: Date;
    elapsed(): number;
    reset(): void;
}
