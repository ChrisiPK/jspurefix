/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface ILogon {
    StandardHeader: IStandardHeader;
    EncryptMethod: number;
    HeartBtInt: number;
    RawDataLength?: number;
    RawData?: Buffer;
    ResetSeqNumFlag?: string;
    StandardTrailer: IStandardTrailer;
}