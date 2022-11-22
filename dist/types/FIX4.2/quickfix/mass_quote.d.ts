import { IStandardHeader } from './set/standard_header';
import { IMassQuoteNoQuoteSets } from './set/mass_quote_no_quote_sets';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMassQuote {
    StandardHeader: IStandardHeader;
    QuoteReqID?: string;
    QuoteID: string;
    QuoteResponseLevel?: number;
    DefBidSize?: number;
    DefOfferSize?: number;
    NoQuoteSets: IMassQuoteNoQuoteSets[];
    StandardTrailer: IStandardTrailer;
}
