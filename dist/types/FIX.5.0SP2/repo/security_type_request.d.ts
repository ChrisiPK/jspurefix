/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityTypeRequest {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    MarketID?: string;
    MarketSegmentID?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Product?: number;
    SecurityType?: string;
    SecuritySubType?: string;
    StandardTrailer: IStandardTrailer;
}
