/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IQuoteRequestRejectNoRelatedSym } from './set/quote_request_reject_no_related_sym';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuoteRequestReject {
    StandardHeader: IStandardHeader;
    QuoteReqID: string;
    RFQReqID?: string;
    QuoteRequestRejectReason: number;
    NoRelatedSym: IQuoteRequestRejectNoRelatedSym[];
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
