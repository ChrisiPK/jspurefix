/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IMarketDataSnapshotFullRefreshNoMDEntries } from './set/market_data_snapshot_full_refresh_no_md_entries';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMarketDataSnapshotFullRefresh {
    StandardHeader: IStandardHeader;
    MDReqID?: string;
    Symbol: string;
    SymbolSfx?: string;
    SecurityID?: string;
    IDSource?: string;
    SecurityType?: string;
    MaturityMonthYear?: string;
    MaturityDay?: string;
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
    FinancialStatus?: string;
    CorporateAction?: string;
    TotalVolumeTraded?: number;
    NoMDEntries: IMarketDataSnapshotFullRefreshNoMDEntries[];
    StandardTrailer: IStandardTrailer;
}
