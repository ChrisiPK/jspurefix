/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IRootParties } from './set/root_parties';
import { IQuotReqRjctGrp } from './set/quot_req_rjct_grp';
export interface IQuoteRequestReject {
    QuoteReqID: string;
    RFQReqID?: string;
    QuoteRequestRejectReason: number;
    PrivateQuote?: boolean;
    RespondentType?: number;
    PreTradeAnonymity?: boolean;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    RootParties?: IRootParties[];
    QuotReqRjctGrp?: IQuotReqRjctGrp[];
}
