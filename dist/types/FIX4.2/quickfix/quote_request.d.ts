import { IStandardHeader } from './set/standard_header';
import { IQuoteRequestNoRelatedSym } from './set/quote_request_no_related_sym';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuoteRequest {
    StandardHeader: IStandardHeader;
    QuoteReqID: string;
    NoRelatedSym: IQuoteRequestNoRelatedSym[];
    StandardTrailer: IStandardTrailer;
}
