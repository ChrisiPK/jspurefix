import { IStandardHeader } from './set/standard_header';
import { IMarketDataRequestNoMDEntryTypes } from './set/market_data_request_no_md_entry_types';
import { IMarketDataRequestNoRelatedSym } from './set/market_data_request_no_related_sym';
import { IMarketDataRequestNoTradingSessions } from './set/market_data_request_no_trading_sessions';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMarketDataRequest {
    StandardHeader: IStandardHeader;
    MDReqID: string;
    SubscriptionRequestType: string;
    MarketDepth: number;
    MDUpdateType?: number;
    AggregatedBook?: boolean;
    OpenCloseSettleFlag?: string;
    Scope?: string;
    MDImplicitDelete?: boolean;
    NoMDEntryTypes: IMarketDataRequestNoMDEntryTypes[];
    NoRelatedSym: IMarketDataRequestNoRelatedSym[];
    NoTradingSessions?: IMarketDataRequestNoTradingSessions[];
    StandardTrailer: IStandardTrailer;
}
