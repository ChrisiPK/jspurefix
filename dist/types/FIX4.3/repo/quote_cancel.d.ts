import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuoteCancel {
    StandardHeader: IStandardHeader;
    QuoteReqID?: string;
    QuoteID: string;
    QuoteCancelType: number;
    QuoteResponseLevel?: number;
    Parties?: IParties[];
    Account?: string;
    TradingSessionID?: string;
    NoQuoteEntries?: number;
    Instrument?: IInstrument;
    StandardTrailer: IStandardTrailer;
}
