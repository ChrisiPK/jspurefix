/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
export interface ISecurityTypeRequest {
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
    StandardHeader?: IStandardHeader;
}
