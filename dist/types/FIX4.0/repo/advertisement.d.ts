import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IAdvertisement {
    StandardHeader: IStandardHeader;
    AdvId: number;
    AdvTransType: string;
    AdvRefID?: number;
    Symbol: string;
    SymbolSfx?: string;
    SecurityID?: string;
    IDSource?: string;
    Issuer?: string;
    SecurityDesc?: string;
    AdvSide: string;
    Shares: number;
    Price?: number;
    Currency?: string;
    TransactTime?: string;
    Text?: string;
    StandardTrailer: IStandardTrailer;
}
