import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IRFQReqGrp } from './set/rfq_req_grp';
export interface IRFQRequest {
    RFQReqID: string;
    SubscriptionRequestType?: string;
    PrivateQuote?: boolean;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
    RFQReqGrp?: IRFQReqGrp[];
}
