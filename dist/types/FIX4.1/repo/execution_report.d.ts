import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IExecutionReport {
    StandardHeader: IStandardHeader;
    OrderID: string;
    SecondaryOrderID?: string;
    ClOrdID?: string;
    OrigClOrdID?: string;
    ClientID?: string;
    ExecBroker?: string;
    ListID?: string;
    ExecID: string;
    ExecTransType: string;
    ExecRefID?: string;
    ExecType: string;
    OrdStatus: string;
    OrdRejReason?: number;
    Account?: string;
    SettlmntTyp?: string;
    FutSettDate?: string;
    Symbol: string;
    SymbolSfx?: string;
    SecurityID?: string;
    IDSource?: string;
    SecurityType?: string;
    MaturityMonthYear?: string;
    MaturityDay?: number;
    PutOrCall?: number;
    StrikePrice?: number;
    OptAttribute?: string;
    SecurityExchange?: string;
    Issuer?: string;
    SecurityDesc?: string;
    Side: string;
    OrderQty: number;
    OrdType?: string;
    Price?: number;
    StopPx?: number;
    PegDifference?: number;
    Currency?: string;
    TimeInForce?: string;
    ExpireTime?: string;
    ExecInst?: string;
    Rule80A?: string;
    LastShares: number;
    LastPx: number;
    LastSpotRate?: number;
    LastForwardPoints?: number;
    LastMkt?: string;
    LastCapacity?: string;
    LeavesQty: number;
    CumQty: number;
    AvgPx: number;
    TradeDate?: string;
    TransactTime?: string;
    ReportToExch?: string;
    Commission?: number;
    CommType?: string;
    SettlCurrAmt?: number;
    SettlCurrency?: string;
    SettlCurrFxRate?: number;
    SettlCurrFxRateCalc?: string;
    Text?: string;
    StandardTrailer: IStandardTrailer;
}
