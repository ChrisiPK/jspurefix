import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuoteRequest {
    StandardHeader: IStandardHeader;
    QuoteReqID: string;
    Symbol: string;
    SymbolSfx?: string;
    SecurityID?: string;
    IDSource?: string;
    Issuer?: string;
    SecurityDesc?: string;
    PrevClosePx?: number;
    Side?: string;
    OrderQty?: number;
    StandardTrailer: IStandardTrailer;
}
