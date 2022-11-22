/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IQuotReqRjctGrp } from './set/quot_req_rjct_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuoteRequestReject {
    StandardHeader: IStandardHeader;
    QuoteReqID: string;
    RFQReqID?: string;
    QuoteRequestRejectReason: number;
    QuotReqRjctGrp: IQuotReqRjctGrp[];
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
