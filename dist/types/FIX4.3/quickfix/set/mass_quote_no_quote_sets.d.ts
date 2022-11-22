import { IUnderlyingInstrument } from './underlying_instrument';
import { IMassQuoteNoQuoteSetsNoQuoteEntries } from './mass_quote_no_quote_sets_no_quote_entries';
export interface IMassQuoteNoQuoteSets {
    QuoteSetID: string;
    UnderlyingInstrument: IUnderlyingInstrument;
    QuoteSetValidUntilTime?: Date;
    TotQuoteEntries: number;
    NoQuoteEntries: IMassQuoteNoQuoteSetsNoQuoteEntries[];
}
