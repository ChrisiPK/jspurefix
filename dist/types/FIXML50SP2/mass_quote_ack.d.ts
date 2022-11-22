/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { ITargetParties } from './set/target_parties';
import { IQuotSetAckGrp } from './set/quot_set_ack_grp';
import { IThrottleResponse } from './set/throttle_response';
export interface IMassQuoteAck {
    QuoteReqID?: string;
    QuoteID?: string;
    QuoteStatus: number;
    OrdRejReason?: number;
    QuoteResponseLevel?: number;
    QuoteType?: number;
    QuoteCancelType?: number;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    ComplianceID?: string;
    ComplianceText?: string;
    EncodedComplianceTextLen?: number;
    EncodedComplianceText?: Buffer;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
    TargetParties?: ITargetParties[];
    QuotSetAckGrp?: IQuotSetAckGrp[];
    ThrottleResponse?: IThrottleResponse;
}
