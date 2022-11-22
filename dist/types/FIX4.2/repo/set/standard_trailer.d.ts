/// <reference types="node" />
export interface IStandardTrailer {
    SignatureLength?: number;
    Signature?: Buffer;
    CheckSum: string;
}
