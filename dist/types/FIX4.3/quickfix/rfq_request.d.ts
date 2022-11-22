import { IStandardHeader } from './set/standard_header';
import { IRFQRequestNoRelatedSym } from './set/rfq_request_no_related_sym';
import { IStandardTrailer } from './set/standard_trailer';
export interface IRFQRequest {
    StandardHeader: IStandardHeader;
    RFQReqID: string;
    NoRelatedSym: IRFQRequestNoRelatedSym[];
    SubscriptionRequestType?: string;
    StandardTrailer: IStandardTrailer;
}
