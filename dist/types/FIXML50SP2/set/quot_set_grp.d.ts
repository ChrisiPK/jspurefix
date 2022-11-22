import { IUnderlyingInstrument } from './underlying_instrument';
import { IQuotEntryGrp } from './quot_entry_grp';
export interface IQuotSetGrp {
    QuoteSetID: string;
    QuoteSetValidUntilTime?: Date;
    TotNoQuoteEntries: number;
    LastFragment?: boolean;
    UnderlyingInstrument?: IUnderlyingInstrument;
    QuotEntryGrp: IQuotEntryGrp[];
}
