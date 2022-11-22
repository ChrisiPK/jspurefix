import { INestedParties2 } from './nested_parties_2';
export interface IOrdAllocGrp {
    ClOrdID?: string;
    OrderID?: string;
    SecondaryOrderID?: string;
    SecondaryClOrdID?: string;
    ListID?: string;
    OrderQty?: number;
    OrderAvgPx?: number;
    OrderBookingQty?: number;
    NestedParties2?: INestedParties2[];
}
