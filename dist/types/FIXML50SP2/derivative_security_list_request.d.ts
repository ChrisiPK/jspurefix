/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IUnderlyingInstrument } from './set/underlying_instrument';
import { IDerivativeInstrument } from './set/derivative_instrument';
export interface IDerivativeSecurityListRequest {
    SecurityReqID: string;
    SecurityListRequestType: number;
    MarketID?: string;
    MarketSegmentID?: string;
    SecuritySubType?: string;
    Currency?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SubscriptionRequestType?: string;
    StandardHeader?: IStandardHeader;
    UnderlyingInstrument?: IUnderlyingInstrument;
    DerivativeInstrument?: IDerivativeInstrument;
}
