/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IMarginReqmtInqQualGrp } from './set/margin_reqmt_inq_qual_grp';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
export interface IMarginRequirementInquiryAck {
    MarginReqmtInqID: string;
    MarginReqmtInqStatus: number;
    PosMaintResult?: number;
    TotNumReports?: number;
    SubscriptionRequestType?: string;
    ResponseTransportType?: number;
    ResponseDestination?: string;
    ClearingBusinessDate?: Date;
    SettlSessID?: string;
    SettlSessSubID?: string;
    MarginClass?: string;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    MarginReqmtInqQualGrp?: IMarginReqmtInqQualGrp[];
    Parties?: IParties[];
    Instrument?: IInstrument;
}
