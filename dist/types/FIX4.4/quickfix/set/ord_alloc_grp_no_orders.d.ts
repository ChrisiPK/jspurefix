import { INestedParties2 } from './nested_parties_2';
export interface IOrdAllocGrpNoOrders {
    ClOrdID?: string;
    OrderID?: string;
    SecondaryOrderID?: string;
    SecondaryClOrdID?: string;
    ListID?: string;
    NestedParties2?: INestedParties2;
    OrderQty?: number;
    OrderAvgPx?: number;
    OrderBookingQty?: number;
}
