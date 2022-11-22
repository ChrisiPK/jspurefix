/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IQuotSetGrp } from './set/quot_set_grp';
export interface IMassQuote {
    QuoteReqID?: string;
    QuoteID: string;
    QuoteType?: number;
    QuoteModelType?: number;
    QuoteResponseLevel?: number;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    DefBidSize?: number;
    DefOfferSize?: number;
    SelfMatchPreventionID?: string;
    ThrottleInst?: number;
    ComplianceID?: string;
    ComplianceText?: string;
    EncodedComplianceTextLen?: number;
    EncodedComplianceText?: Buffer;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
    QuotSetGrp?: IQuotSetGrp[];
}
