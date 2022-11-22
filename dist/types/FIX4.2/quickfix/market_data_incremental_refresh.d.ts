import { IStandardHeader } from './set/standard_header';
import { IMarketDataIncrementalRefreshNoMDEntries } from './set/market_data_incremental_refresh_no_md_entries';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMarketDataIncrementalRefresh {
    StandardHeader: IStandardHeader;
    MDReqID?: string;
    NoMDEntries: IMarketDataIncrementalRefreshNoMDEntries[];
    StandardTrailer: IStandardTrailer;
}
