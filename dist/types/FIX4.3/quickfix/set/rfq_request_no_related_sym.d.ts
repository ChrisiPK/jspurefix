import { IInstrument } from './instrument';
export interface IRFQRequestNoRelatedSym {
    Instrument: IInstrument;
    PrevClosePx?: number;
    QuoteRequestType?: number;
    QuoteType?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
}
