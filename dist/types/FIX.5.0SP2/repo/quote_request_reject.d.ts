/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IRootParties } from './set/root_parties';
import { IQuotReqRjctGrp } from './set/quot_req_rjct_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuoteRequestReject {
    StandardHeader: IStandardHeader;
    QuoteReqID: string;
    RFQReqID?: string;
    QuoteRequestRejectReason: number;
    PrivateQuote?: boolean;
    RespondentType?: number;
    PreTradeAnonymity?: boolean;
    RootParties?: IRootParties[];
    QuotReqRjctGrp: IQuotReqRjctGrp[];
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
