import { IStandardHeader } from './set/standard_header';
export interface ITradingSessionStatusRequest {
    TradSesReqID: string;
    MarketID?: string;
    MarketSegmentID?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    TradSesMethod?: number;
    TradSesMode?: number;
    SubscriptionRequestType: string;
    SecurityExchange?: string;
    StandardHeader?: IStandardHeader;
}
