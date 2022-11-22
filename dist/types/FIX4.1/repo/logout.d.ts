import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface ILogout {
    StandardHeader: IStandardHeader;
    Text?: string;
    StandardTrailer: IStandardTrailer;
}
