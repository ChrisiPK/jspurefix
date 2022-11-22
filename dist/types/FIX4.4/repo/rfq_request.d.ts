import { IStandardHeader } from './set/standard_header';
import { IRFQReqGrp } from './set/rfq_req_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IRFQRequest {
    StandardHeader: IStandardHeader;
    RFQReqID: string;
    RFQReqGrp: IRFQReqGrp[];
    SubscriptionRequestType?: string;
    StandardTrailer: IStandardTrailer;
}
