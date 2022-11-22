import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IListExecute {
    StandardHeader: IStandardHeader;
    ListID: string;
    WaveNo?: string;
    Text?: string;
    StandardTrailer: IStandardTrailer;
}
