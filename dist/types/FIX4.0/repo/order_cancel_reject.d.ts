import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IOrderCancelReject {
    StandardHeader: IStandardHeader;
    OrderID: string;
    ClOrdID: string;
    ClientID?: string;
    ExecBroker?: string;
    ListID?: string;
    CxlRejReason?: number;
    Text?: string;
    StandardTrailer: IStandardTrailer;
}
