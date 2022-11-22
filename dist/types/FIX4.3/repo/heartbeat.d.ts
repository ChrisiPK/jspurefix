import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IHeartbeat {
    StandardHeader: IStandardHeader;
    TestReqID?: string;
    StandardTrailer: IStandardTrailer;
}
