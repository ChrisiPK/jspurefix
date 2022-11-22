import { IStandardHeader } from './set/standard_header';
import { IStrmAsgnRptGrp } from './set/strm_asgn_rpt_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IStreamAssignmentReport {
    StandardHeader: IStandardHeader;
    StreamAsgnRptID: string;
    StreamAsgnReqType?: number;
    StreamAsgnReqID?: string;
    StrmAsgnRptGrp?: IStrmAsgnRptGrp[];
    StandardTrailer: IStandardTrailer;
}
