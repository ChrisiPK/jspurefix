/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IListStatus {
    StandardHeader: IStandardHeader;
    ListID: string;
    ListStatusType: number;
    NoRpts: number;
    ListOrderStatus: number;
    RptSeq: number;
    ListStatusText?: string;
    EncodedListStatusTextLen?: number;
    EncodedListStatusText?: Buffer;
    TransactTime?: Date;
    TotNoOrders: number;
    NoOrders: number;
    ClOrdID: string;
    CumQty: number;
    OrdStatus: string;
    LeavesQty: number;
    CxlQty: number;
    AvgPx: number;
    OrdRejReason?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
