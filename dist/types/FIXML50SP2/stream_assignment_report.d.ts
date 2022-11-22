import { IStandardHeader } from './set/standard_header';
import { IStrmAsgnRptGrp } from './set/strm_asgn_rpt_grp';
export interface IStreamAssignmentReport {
    StreamAsgnRptID: string;
    StreamAsgnReqType?: number;
    StreamAsgnReqID?: string;
    StandardHeader?: IStandardHeader;
    StrmAsgnRptGrp?: IStrmAsgnRptGrp[];
}
