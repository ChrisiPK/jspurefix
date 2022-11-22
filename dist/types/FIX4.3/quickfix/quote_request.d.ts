/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IQuoteRequestNoRelatedSym } from './set/quote_request_no_related_sym';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuoteRequest {
    StandardHeader: IStandardHeader;
    QuoteReqID: string;
    RFQReqID?: string;
    NoRelatedSym: IQuoteRequestNoRelatedSym[];
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
