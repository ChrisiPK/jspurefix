import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IQuoteCancelNoQuoteEntries } from './set/quote_cancel_no_quote_entries';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuoteCancel {
    StandardHeader: IStandardHeader;
    QuoteReqID?: string;
    QuoteID: string;
    QuoteCancelType: number;
    QuoteResponseLevel?: number;
    Parties?: IParties;
    Account?: string;
    AccountType?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    NoQuoteEntries?: IQuoteCancelNoQuoteEntries[];
    StandardTrailer: IStandardTrailer;
}
