/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IRootParties } from './set/root_parties';
import { IQuotReqGrp } from './set/quot_req_grp';
export interface IQuoteRequest {
    QuoteReqID: string;
    RFQReqID?: string;
    ClOrdID?: string;
    BookingType?: number;
    OrderCapacity?: string;
    OrderRestrictions?: string;
    PrivateQuote?: boolean;
    RespondentType?: number;
    PreTradeAnonymity?: boolean;
    ComplianceID?: string;
    ComplianceText?: string;
    EncodedComplianceTextLen?: number;
    EncodedComplianceText?: Buffer;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    RootParties?: IRootParties[];
    QuotReqGrp?: IQuotReqGrp[];
}
