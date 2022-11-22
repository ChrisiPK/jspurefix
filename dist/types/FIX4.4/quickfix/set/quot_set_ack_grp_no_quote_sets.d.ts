import { IUnderlyingInstrument } from './underlying_instrument';
import { IQuotEntryAckGrp } from './quot_entry_ack_grp';
export interface IQuotSetAckGrpNoQuoteSets {
    QuoteSetID?: string;
    UnderlyingInstrument?: IUnderlyingInstrument;
    TotNoQuoteEntries?: number;
    LastFragment?: boolean;
    QuotEntryAckGrp?: IQuotEntryAckGrp;
}
