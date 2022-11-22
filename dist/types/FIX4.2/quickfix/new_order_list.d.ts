/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { INewOrderListNoOrders } from './set/new_order_list_no_orders';
import { IStandardTrailer } from './set/standard_trailer';
export interface INewOrderList {
    StandardHeader: IStandardHeader;
    ListID: string;
    BidID?: string;
    ClientBidID?: string;
    ProgRptReqs?: number;
    BidType: number;
    ProgPeriodInterval?: number;
    ListExecInstType?: string;
    ListExecInst?: string;
    EncodedListExecInstLen?: number;
    EncodedListExecInst?: Buffer;
    TotNoOrders: number;
    NoOrders: INewOrderListNoOrders[];
    StandardTrailer: IStandardTrailer;
}
