import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IIOI {
    StandardHeader: IStandardHeader;
    IOIid: number;
    IOITransType: string;
    IOIRefID?: number;
    Symbol: string;
    SymbolSfx?: string;
    SecurityID?: string;
    IDSource?: string;
    Issuer?: string;
    SecurityDesc?: string;
    Side: string;
    IOIShares: string;
    Price?: number;
    Currency?: string;
    ValidUntilTime?: string;
    IOIQltyInd?: string;
    IOIOthSvc?: string;
    IOINaturalFlag?: string;
    IOIQualifier?: string;
    Text?: string;
    StandardTrailer: IStandardTrailer;
}
