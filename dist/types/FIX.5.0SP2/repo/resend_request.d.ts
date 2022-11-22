import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IResendRequest {
    StandardHeader: IStandardHeader;
    BeginSeqNo: number;
    EndSeqNo: number;
    StandardTrailer: IStandardTrailer;
}
