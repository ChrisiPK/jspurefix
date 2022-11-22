/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityTypeRequest {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    StandardTrailer: IStandardTrailer;
}
