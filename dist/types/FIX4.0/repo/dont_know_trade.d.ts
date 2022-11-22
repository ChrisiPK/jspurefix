import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IDontKnowTrade {
    StandardHeader: IStandardHeader;
    OrderID?: string;
    ExecID?: number;
    DKReason: string;
    Symbol: string;
    Side: string;
    OrderQty: number;
    LastShares: number;
    LastPx: number;
    Text?: string;
    StandardTrailer: IStandardTrailer;
}
