import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuote {
    StandardHeader: IStandardHeader;
    QuoteReqID?: string;
    QuoteID: string;
    Symbol: string;
    SymbolSfx?: string;
    SecurityID?: string;
    IDSource?: string;
    Issuer?: string;
    SecurityDesc?: string;
    BidPx: number;
    OfferPx?: number;
    BidSize?: number;
    OfferSize?: number;
    ValidUntilTime?: string;
    StandardTrailer: IStandardTrailer;
}
