import { IUnderlyingInstrument } from './underlying_instrument';
import { IQuotEntryAckGrp } from './quot_entry_ack_grp';
export interface IQuotSetAckGrp {
    QuoteSetID?: string;
    UnderlyingInstrument?: IUnderlyingInstrument;
    TotNoQuoteEntries?: number;
    TotNoCxldQuotes?: number;
    TotNoAccQuotes?: number;
    TotNoRejQuotes?: number;
    LastFragment?: boolean;
    QuotEntryAckGrp?: IQuotEntryAckGrp[];
    QuoteSetValidUntilTime?: Date;
}
