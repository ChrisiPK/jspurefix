import { IUnderlyingInstrument } from './underlying_instrument';
import { IQuotEntryAckGrp } from './quot_entry_ack_grp';
export interface IQuotSetAckGrp {
    QuoteSetID?: string;
    QuoteSetValidUntilTime?: Date;
    TotNoQuoteEntries?: number;
    TotNoCxldQuotes?: number;
    TotNoAccQuotes?: number;
    TotNoRejQuotes?: number;
    LastFragment?: boolean;
    UnderlyingInstrument?: IUnderlyingInstrument;
    QuotEntryAckGrp?: IQuotEntryAckGrp[];
}
