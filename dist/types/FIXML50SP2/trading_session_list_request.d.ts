import { IStandardHeader } from './set/standard_header';
export interface ITradingSessionListRequest {
    TradSesReqID: string;
    MarketID?: string;
    MarketSegmentID?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SecurityExchange?: string;
    TradSesMethod?: number;
    TradSesMode?: number;
    SubscriptionRequestType: string;
    StandardHeader?: IStandardHeader;
}
