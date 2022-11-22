import { IStandardHeader } from './set/standard_header';
import { ICompIDReqGrp } from './set/comp_id_req_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface INetworkCounterpartySystemStatusRequest {
    StandardHeader: IStandardHeader;
    NetworkRequestType: number;
    NetworkRequestID: string;
    CompIDReqGrp?: ICompIDReqGrp[];
    StandardTrailer: IStandardTrailer;
}
