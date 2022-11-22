import { IStandardHeader } from './set/standard_header';
import { IStrmAsgnReqGrp } from './set/strm_asgn_req_grp';
export interface IStreamAssignmentRequest {
    StreamAsgnReqID: string;
    StreamAsgnReqType: number;
    StandardHeader?: IStandardHeader;
    StrmAsgnReqGrp?: IStrmAsgnReqGrp[];
}
