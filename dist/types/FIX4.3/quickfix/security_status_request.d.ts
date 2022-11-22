import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityStatusRequest {
    StandardHeader: IStandardHeader;
    SecurityStatusReqID: string;
    Instrument?: IInstrument;
    Currency?: string;
    SubscriptionRequestType: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    StandardTrailer: IStandardTrailer;
}
