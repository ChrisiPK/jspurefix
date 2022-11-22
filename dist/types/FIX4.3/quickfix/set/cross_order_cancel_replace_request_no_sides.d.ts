/// <reference types="node" />
import { IParties } from './parties';
import { ICrossOrderCancelReplaceRequestNoSidesNoAllocs } from './cross_order_cancel_replace_request_no_sides_no_allocs';
import { IOrderQtyData } from './order_qty_data';
import { ICommissionData } from './commission_data';
export interface ICrossOrderCancelReplaceRequestNoSides {
    Side: string;
    OrigClOrdID: string;
    ClOrdID: string;
    SecondaryClOrdID?: string;
    ClOrdLinkID?: string;
    OrigOrdModTime?: Date;
    Parties: IParties;
    TradeOriginationDate?: string;
    Account?: string;
    AccountType?: number;
    DayBookingInst?: string;
    BookingUnit?: string;
    PreallocMethod?: string;
    NoAllocs?: ICrossOrderCancelReplaceRequestNoSidesNoAllocs[];
    QuantityType?: number;
    OrderQtyData: IOrderQtyData;
    CommissionData: ICommissionData;
    OrderCapacity?: string;
    OrderRestrictions?: string;
    CustOrderCapacity?: number;
    ForexReq?: boolean;
    SettlCurrency?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    PositionEffect?: string;
    CoveredOrUncovered?: number;
    CashMargin?: string;
    ClearingFeeIndicator?: string;
    SolicitedFlag?: boolean;
    SideComplianceID?: string;
}
