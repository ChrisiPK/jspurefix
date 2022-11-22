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
    Side: string;
    StandardTrailer: IStandardTrailer;
}
