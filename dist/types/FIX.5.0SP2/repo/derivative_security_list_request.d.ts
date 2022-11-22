/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IUnderlyingInstrument } from './set/underlying_instrument';
import { IDerivativeInstrument } from './set/derivative_instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface IDerivativeSecurityListRequest {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    SecurityListRequestType: number;
    MarketID?: string;
    MarketSegmentID?: string;
    UnderlyingInstrument?: IUnderlyingInstrument;
    DerivativeInstrument?: IDerivativeInstrument;
    SecuritySubType?: string;
    Currency?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SubscriptionRequestType?: string;
    StandardTrailer: IStandardTrailer;
}
