/// <reference types="node" />
import { IParties } from './parties';
import { INewOrderCrossNoSidesNoAllocs } from './new_order_cross_no_sides_no_allocs';
import { IOrderQtyData } from './order_qty_data';
import { ICommissionData } from './commission_data';
export interface INewOrderCrossNoSides {
    Side: string;
    ClOrdID: string;
    SecondaryClOrdID?: string;
    ClOrdLinkID?: string;
    Parties: IParties;
    TradeOriginationDate?: string;
    Account?: string;
    AccountType?: number;
    DayBookingInst?: string;
    BookingUnit?: string;
    PreallocMethod?: string;
    NoAllocs?: INewOrderCrossNoSidesNoAllocs[];
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
