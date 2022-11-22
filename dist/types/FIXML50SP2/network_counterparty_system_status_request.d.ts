import { IStandardHeader } from './set/standard_header';
import { ICompIDReqGrp } from './set/comp_id_req_grp';
export interface INetworkCounterpartySystemStatusRequest {
    NetworkRequestType: number;
    NetworkRequestID: string;
    StandardHeader?: IStandardHeader;
    CompIDReqGrp?: ICompIDReqGrp[];
}
