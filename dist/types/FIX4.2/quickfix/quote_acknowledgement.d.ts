import { IStandardHeader } from './set/standard_header';
import { IQuoteAcknowledgementNoQuoteSets } from './set/quote_acknowledgement_no_quote_sets';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuoteAcknowledgement {
    StandardHeader: IStandardHeader;
    QuoteReqID?: string;
    QuoteID?: string;
    QuoteAckStatus: number;
    QuoteRejectReason?: number;
    QuoteResponseLevel?: number;
    TradingSessionID?: string;
    Text?: string;
    NoQuoteSets?: IQuoteAcknowledgementNoQuoteSets[];
    StandardTrailer: IStandardTrailer;
}
