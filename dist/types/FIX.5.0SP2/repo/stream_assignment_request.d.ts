import { IStandardHeader } from './set/standard_header';
import { IStrmAsgnReqGrp } from './set/strm_asgn_req_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IStreamAssignmentRequest {
    StandardHeader: IStandardHeader;
    StreamAsgnReqID: string;
    StreamAsgnReqType: number;
    StrmAsgnReqGrp: IStrmAsgnReqGrp[];
    StandardTrailer: IStandardTrailer;
}
