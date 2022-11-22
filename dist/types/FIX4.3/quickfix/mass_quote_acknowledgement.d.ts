import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IMassQuoteAcknowledgementNoQuoteSets } from './set/mass_quote_acknowledgement_no_quote_sets';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMassQuoteAcknowledgement {
    StandardHeader: IStandardHeader;
    QuoteReqID?: string;
    QuoteID?: string;
    QuoteStatus: number;
    QuoteRejectReason?: number;
    QuoteResponseLevel?: number;
    QuoteType?: number;
    Parties?: IParties;
    Account?: string;
    AccountType?: number;
    Text?: string;
    NoQuoteSets?: IMassQuoteAcknowledgementNoQuoteSets[];
    StandardTrailer: IStandardTrailer;
}
