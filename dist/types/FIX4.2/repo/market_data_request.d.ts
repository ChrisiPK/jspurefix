/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMarketDataRequest {
    StandardHeader: IStandardHeader;
    MDReqID: string;
    SubscriptionRequestType: string;
    MarketDepth: number;
    MDUpdateType?: number;
    AggregatedBook?: boolean;
    NoMDEntryTypes: number;
    MDEntryType: string;
    NoRelatedSym: number;
    Symbol: string;
    SymbolSfx?: string;
    SecurityID?: string;
    IDSource?: string;
    SecurityType?: string;
    MaturityMonthYear?: string;
    MaturityDay?: number;
    PutOrCall?: number;
    StrikePrice?: number;
    OptAttribute?: string;
    ContractMultiplier?: number;
    CouponRate?: number;
    SecurityExchange?: string;
    Issuer?: string;
    EncodedIssuerLen?: number;
    EncodedIssuer?: Buffer;
    SecurityDesc?: string;
    EncodedSecurityDescLen?: number;
    EncodedSecurityDesc?: Buffer;
    TradingSessionID?: string;
    StandardTrailer: IStandardTrailer;
}
