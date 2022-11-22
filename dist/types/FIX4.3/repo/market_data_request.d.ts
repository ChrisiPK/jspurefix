import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMarketDataRequest {
    StandardHeader: IStandardHeader;
    MDReqID: string;
    SubscriptionRequestType: string;
    MarketDepth: number;
    MDUpdateType?: number;
    AggregatedBook?: boolean;
    OpenCloseSettleFlag?: string;
    NoMDEntryTypes: number;
    MDEntryType: string;
    NoRelatedSym: number;
    Instrument: IInstrument;
    NoTradingSessions?: number;
    TradingSessionID?: string;
    StandardTrailer: IStandardTrailer;
}
