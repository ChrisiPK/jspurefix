/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IOrderCancelReject {
    StandardHeader: IStandardHeader;
    OrderID: string;
    SecondaryOrderID?: string;
    ClOrdID: string;
    OrigClOrdID: string;
    OrdStatus: string;
    ClientID?: string;
    ExecBroker?: string;
    ListID?: string;
    Account?: string;
    TransactTime?: Date;
    CxlRejResponseTo: string;
    CxlRejReason?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
