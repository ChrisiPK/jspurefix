import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface ITradingSessionStatusRequest {
    StandardHeader: IStandardHeader;
    TradSesReqID: string;
    MarketID?: string;
    MarketSegmentID?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    TradSesMethod?: number;
    TradSesMode?: number;
    SubscriptionRequestType: string;
    SecurityExchange?: string;
    StandardTrailer: IStandardTrailer;
}
