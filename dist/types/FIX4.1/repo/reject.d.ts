import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IReject {
    StandardHeader: IStandardHeader;
    RefSeqNum: number;
    Text?: string;
    StandardTrailer: IStandardTrailer;
}
