import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface ITradingSessionListRequest {
    StandardHeader: IStandardHeader;
    TradSesReqID: string;
    MarketID?: string;
    MarketSegmentID?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SecurityExchange?: string;
    TradSesMethod?: number;
    TradSesMode?: number;
    SubscriptionRequestType: string;
    StandardTrailer: IStandardTrailer;
}
