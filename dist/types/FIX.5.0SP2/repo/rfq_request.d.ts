import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IRFQReqGrp } from './set/rfq_req_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IRFQRequest {
    StandardHeader: IStandardHeader;
    RFQReqID: string;
    Parties?: IParties[];
    RFQReqGrp: IRFQReqGrp[];
    SubscriptionRequestType?: string;
    PrivateQuote?: boolean;
    StandardTrailer: IStandardTrailer;
}
