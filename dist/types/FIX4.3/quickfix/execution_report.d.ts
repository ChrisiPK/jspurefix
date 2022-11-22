/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IExecutionReportNoContraBrokers } from './set/execution_report_no_contra_brokers';
import { IInstrument } from './set/instrument';
import { IStipulations } from './set/stipulations';
import { IOrderQtyData } from './set/order_qty_data';
import { ICommissionData } from './set/commission_data';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IYieldData } from './set/yield_data';
import { IExecutionReportNoContAmts } from './set/execution_report_no_cont_amts';
import { IExecutionReportNoLegs } from './set/execution_report_no_legs';
import { IStandardTrailer } from './set/standard_trailer';
export interface IExecutionReport {
    StandardHeader: IStandardHeader;
    OrderID: string;
    SecondaryOrderID?: string;
    SecondaryClOrdID?: string;
    SecondaryExecID?: string;
    ClOrdID?: string;
    OrigClOrdID?: string;
    ClOrdLinkID?: string;
    Parties?: IParties;
    TradeOriginationDate?: string;
    NoContraBrokers?: IExecutionReportNoContraBrokers[];
    ListID?: string;
    CrossID?: string;
    OrigCrossID?: string;
    CrossType?: number;
    ExecID: string;
    ExecRefID?: string;
    ExecType: string;
    OrdStatus: string;
    WorkingIndicator?: boolean;
    OrdRejReason?: number;
    ExecRestatementReason?: number;
    Account?: string;
    AccountType?: number;
    DayBookingInst?: string;
    BookingUnit?: string;
    PreallocMethod?: string;
    SettlmntTyp?: string;
    FutSettDate?: Date;
    CashMargin?: string;
    ClearingFeeIndicator?: string;
    Instrument?: IInstrument;
    Side: string;
    Stipulations?: IStipulations;
    QuantityType?: number;
    OrderQtyData?: IOrderQtyData;
    OrdType?: string;
    PriceType?: number;
    Price?: number;
    StopPx?: number;
    PegDifference?: number;
    DiscretionInst?: string;
    DiscretionOffset?: number;
    Currency?: string;
    ComplianceID?: string;
    SolicitedFlag?: boolean;
    TimeInForce?: string;
    EffectiveTime?: Date;
    ExpireDate?: Date;
    ExpireTime?: Date;
    ExecInst?: string;
    OrderCapacity?: string;
    OrderRestrictions?: string;
    CustOrderCapacity?: number;
    Rule80A?: string;
    LastQty?: number;
    UnderlyingLastQty?: number;
    LastPx?: number;
    UnderlyingLastPx?: number;
    LastSpotRate?: number;
    LastForwardPoints?: number;
    LastMkt?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    LastCapacity?: string;
    LeavesQty: number;
    CumQty: number;
    AvgPx: number;
    DayOrderQty?: number;
    DayCumQty?: number;
    DayAvgPx?: number;
    GTBookingInst?: number;
    TradeDate?: Date;
    TransactTime?: Date;
    ReportToExch?: boolean;
    CommissionData?: ICommissionData;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    YieldData?: IYieldData;
    GrossTradeAmt?: number;
    NumDaysInterest?: number;
    ExDate?: string;
    AccruedInterestRate?: number;
    AccruedInterestAmt?: number;
    TradedFlatSwitch?: boolean;
    BasisFeatureDate?: string;
    BasisFeaturePrice?: number;
    Concession?: number;
    TotalTakedown?: number;
    NetMoney?: number;
    SettlCurrAmt?: number;
    SettlCurrency?: string;
    SettlCurrFxRate?: number;
    SettlCurrFxRateCalc?: string;
    HandlInst?: string;
    MinQty?: number;
    MaxFloor?: number;
    PositionEffect?: string;
    MaxShow?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    FutSettDate2?: Date;
    OrderQty2?: number;
    LastForwardPoints2?: number;
    MultiLegReportingType?: string;
    CancellationRights?: string;
    MoneyLaunderingStatus?: string;
    RegistID?: string;
    Designation?: string;
    TransBkdTime?: Date;
    ExecValuationPoint?: Date;
    ExecPriceType?: string;
    ExecPriceAdjustment?: number;
    PriorityIndicator?: number;
    PriceImprovement?: number;
    NoContAmts?: IExecutionReportNoContAmts[];
    NoLegs?: IExecutionReportNoLegs[];
    StandardTrailer: IStandardTrailer;
}