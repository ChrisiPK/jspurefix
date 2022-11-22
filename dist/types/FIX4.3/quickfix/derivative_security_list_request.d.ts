/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IUnderlyingInstrument } from './set/underlying_instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface IDerivativeSecurityListRequest {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    SecurityListRequestType: number;
    UnderlyingInstrument?: IUnderlyingInstrument;
    Currency?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SubscriptionRequestType?: string;
    StandardTrailer: IStandardTrailer;
}
