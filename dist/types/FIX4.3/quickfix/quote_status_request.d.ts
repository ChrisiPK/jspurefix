import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IParties } from './set/parties';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuoteStatusRequest {
    StandardHeader: IStandardHeader;
    QuoteStatusReqID?: string;
    QuoteID?: string;
    Instrument?: IInstrument;
    Parties?: IParties;
    Account?: string;
    AccountType?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SubscriptionRequestType?: string;
    StandardTrailer: IStandardTrailer;
}