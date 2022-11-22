import { IUnderlyingInstrument } from './underlying_instrument';
import { IMassQuoteAcknowledgementNoQuoteSetsNoQuoteEntries } from './mass_quote_acknowledgement_no_quote_sets_no_quote_entries';
export interface IMassQuoteAcknowledgementNoQuoteSets {
    QuoteSetID?: string;
    UnderlyingInstrument?: IUnderlyingInstrument;
    TotQuoteEntries?: number;
    NoQuoteEntries?: IMassQuoteAcknowledgementNoQuoteSetsNoQuoteEntries[];
}
