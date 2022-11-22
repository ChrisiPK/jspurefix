import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IListStatus {
    StandardHeader: IStandardHeader;
    ListID: string;
    WaveNo?: string;
    NoRpts: number;
    RptSeq: number;
    NoOrders: number;
    ClOrdID: string;
    CumQty: number;
    LeavesQty: number;
    CxlQty: number;
    AvgPx: number;
    StandardTrailer: IStandardTrailer;
}
