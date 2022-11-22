import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuoteRequest {
    StandardHeader: IStandardHeader;
    QuoteReqID: string;
    Symbol: string;
    SymbolSfx?: string;
    SecurityID?: string;
    IDSource?: string;
    SecurityType?: string;
    MaturityMonthYear?: string;
    MaturityDay?: number;
    PutOrCall?: number;
    StrikePrice?: number;
    OptAttribute?: string;
    SecurityExchange?: string;
    Issuer?: string;
    SecurityDesc?: string;
    PrevClosePx?: number;
    Side?: string;
    OrderQty?: number;
    FutSettDate?: string;
    OrdType?: string;
    FutSettDate2?: string;
    OrderQty2?: number;
    StandardTrailer: IStandardTrailer;
}
