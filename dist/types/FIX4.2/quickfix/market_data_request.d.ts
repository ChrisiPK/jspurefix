import { IStandardHeader } from './set/standard_header';
import { IMarketDataRequestNoMDEntryTypes } from './set/market_data_request_no_md_entry_types';
import { IMarketDataRequestNoRelatedSym } from './set/market_data_request_no_related_sym';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMarketDataRequest {
    StandardHeader: IStandardHeader;
    MDReqID: string;
    SubscriptionRequestType: string;
    MarketDepth: number;
    MDUpdateType?: number;
    AggregatedBook?: boolean;
    NoMDEntryTypes: IMarketDataRequestNoMDEntryTypes[];
    NoRelatedSym: IMarketDataRequestNoRelatedSym[];
    StandardTrailer: IStandardTrailer;
}
