/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityListRequest {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    Instrument?: IInstrument;
    Currency?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    SubscriptionRequestType?: string;
    StandardTrailer: IStandardTrailer;
}
