import { IUnderlyingInstrument } from './underlying_instrument';
import { IQuotEntryGrp } from './quot_entry_grp';
export interface IQuotSetGrpNoQuoteSets {
    QuoteSetID: string;
    UnderlyingInstrument: IUnderlyingInstrument;
    QuoteSetValidUntilTime?: Date;
    TotNoQuoteEntries: number;
    LastFragment?: boolean;
    QuotEntryGrp: IQuotEntryGrp;
}
