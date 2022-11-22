/// <reference types="node" />
import { IParties } from './parties';
import { INewOrderListNoOrdersNoAllocs } from './new_order_list_no_orders_no_allocs';
import { INewOrderListNoOrdersNoTradingSessions } from './new_order_list_no_orders_no_trading_sessions';
import { IInstrument } from './instrument';
import { IStipulations } from './stipulations';
import { IOrderQtyData } from './order_qty_data';
import { ISpreadOrBenchmarkCurveData } from './spread_or_benchmark_curve_data';
import { IYieldData } from './yield_data';
import { ICommissionData } from './commission_data';
export interface INewOrderListNoOrders {
    ClOrdID: string;
    SecondaryClOrdID?: string;
    ListSeqNo: number;
    ClOrdLinkID?: string;
    SettlInstMode?: string;
    Parties: IParties;
    TradeOriginationDate?: string;
    Account?: string;
    AccountType?: number;
    DayBookingInst?: string;
    BookingUnit?: string;
    PreallocMethod?: string;
    NoAllocs?: INewOrderListNoOrdersNoAllocs[];
    SettlmntTyp?: string;
    FutSettDate?: Date;
    CashMargin?: string;
    ClearingFeeIndicator?: string;
    HandlInst?: string;
    ExecInst?: string;
    MinQty?: number;
    MaxFloor?: number;
    ExDestination?: string;
    NoTradingSessions?: INewOrderListNoOrdersNoTradingSessions[];
    ProcessCode?: string;
    Instrument: IInstrument;
    PrevClosePx?: number;
    Side: string;
    SideValueInd?: number;
    LocateReqd?: boolean;
    TransactTime?: Date;
    Stipulations: IStipulations;
    QuantityType?: number;
    OrderQtyData: IOrderQtyData;
    OrdType?: string;
    PriceType?: number;
    Price?: number;
    StopPx?: number;
    SpreadOrBenchmarkCurveData: ISpreadOrBenchmarkCurveData;
    YieldData: IYieldData;
    Currency?: string;
    ComplianceID?: string;
    SolicitedFlag?: boolean;
    IOIid?: string;
    QuoteID?: string;
    TimeInForce?: string;
    EffectiveTime?: Date;
    ExpireDate?: Date;
    ExpireTime?: Date;
    GTBookingInst?: number;
    CommissionData: ICommissionData;
    OrderCapacity?: string;
    OrderRestrictions?: string;
    CustOrderCapacity?: number;
    Rule80A?: string;
    ForexReq?: boolean;
    SettlCurrency?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    FutSettDate2?: Date;
    OrderQty2?: number;
    Price2?: number;
    PositionEffect?: string;
    CoveredOrUncovered?: number;
    MaxShow?: number;
    PegDifference?: number;
    DiscretionInst?: string;
    DiscretionOffset?: number;
    Designation?: string;
    AccruedInterestRate?: number;
    AccruedInterestAmt?: number;
    NetMoney?: number;
}
