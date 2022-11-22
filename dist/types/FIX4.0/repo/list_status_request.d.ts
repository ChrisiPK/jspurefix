import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IListStatusRequest {
    StandardHeader: IStandardHeader;
    ListID: string;
    WaveNo?: string;
    Text?: string;
    StandardTrailer: IStandardTrailer;
}
