/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IListStatusNoOrders } from './set/list_status_no_orders';
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
    NoOrders: IListStatusNoOrders[];
    StandardTrailer: IStandardTrailer;
}
