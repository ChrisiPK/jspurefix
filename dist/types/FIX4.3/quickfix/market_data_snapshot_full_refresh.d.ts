import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IMarketDataSnapshotFullRefreshNoMDEntries } from './set/market_data_snapshot_full_refresh_no_md_entries';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMarketDataSnapshotFullRefresh {
    StandardHeader: IStandardHeader;
    MDReqID?: string;
    Instrument?: IInstrument;
    FinancialStatus?: string;
    CorporateAction?: string;
    TotalVolumeTraded?: number;
    TotalVolumeTradedDate?: string;
    TotalVolumeTradedTime?: Date;
    NetChgPrevDay?: number;
    NoMDEntries: IMarketDataSnapshotFullRefreshNoMDEntries[];
    StandardTrailer: IStandardTrailer;
}
