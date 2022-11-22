import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface IRFQRequest {
    StandardHeader: IStandardHeader;
    NoRelatedSym: number;
    Instrument: IInstrument;
    PrevClosePx?: number;
    QuoteRequestType?: number;
    TradingSessionID?: string;
    SubscriptionRequestType?: string;
    StandardTrailer: IStandardTrailer;
}
