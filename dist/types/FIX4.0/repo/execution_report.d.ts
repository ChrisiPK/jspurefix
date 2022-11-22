import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IExecutionReport {
    StandardHeader: IStandardHeader;
    OrderID: string;
    ClOrdID?: string;
    ClientID?: string;
    ExecBroker?: string;
    ListID?: string;
    ExecID: number;
    ExecTransType: string;
    ExecRefID?: number;
    OrdStatus: string;
    OrdRejReason?: number;
    Account?: string;
    SettlmntTyp?: string;
    FutSettDate?: string;
    Symbol: string;
    SymbolSfx?: string;
    SecurityID?: string;
    IDSource?: string;
    Issuer?: string;
    SecurityDesc?: string;
    Side: string;
    OrderQty: number;
    OrdType?: string;
    Price?: number;
    StopPx?: number;
    Currency?: string;
    TimeInForce?: string;
    ExpireTime?: string;
    ExecInst?: string;
    Rule80A?: string;
    LastShares: number;
    LastPx: number;
    LastMkt?: string;
    LastCapacity?: string;
    CumQty: number;
    AvgPx: number;
    TradeDate?: string;
    TransactTime?: string;
    ReportToExch?: string;
    Commission?: number;
    CommType?: string;
    NoMiscFees?: number;
    MiscFeeAmt?: number;
    MiscFeeCurr?: string;
    MiscFeeType?: string;
    NetMoney?: number;
    SettlCurrAmt?: number;
    SettlCurrency?: string;
    Text?: string;
    StandardTrailer: IStandardTrailer;
}