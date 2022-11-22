import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IOrderCancelRequest {
    StandardHeader: IStandardHeader;
    OrigClOrdID: string;
    OrderID?: string;
    ClOrdID: string;
    ListID?: string;
    CxlType: string;
    ClientID?: string;
    ExecBroker?: string;
    Symbol: string;
    SymbolSfx?: string;
    SecurityID?: string;
    IDSource?: string;
    Issuer?: string;
    SecurityDesc?: string;
    Side: string;
    OrderQty: number;
    Text?: string;
    StandardTrailer: IStandardTrailer;
}
