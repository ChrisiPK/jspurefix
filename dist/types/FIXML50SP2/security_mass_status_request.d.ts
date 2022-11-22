import { IStandardHeader } from './set/standard_header';
import { IInstrumentScope } from './set/instrument_scope';
export interface ISecurityMassStatusRequest {
    SecurityStatusReqID: string;
    SubscriptionRequestType: string;
    SecurityListID?: string;
    MarketID?: string;
    MarketSegmentID?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    StandardHeader?: IStandardHeader;
    InstrumentScope?: IInstrumentScope;
}
