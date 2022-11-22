import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IOrderStatusRequest {
    StandardHeader: IStandardHeader;
    OrderID?: string;
    ClOrdID: string;
    ClientID?: string;
    ExecBroker?: string;
    Symbol: string;
    SymbolSfx?: string;
    Issuer?: string;
    SecurityDesc?: string;
    Side: string;
    StandardTrailer: IStandardTrailer;
}
