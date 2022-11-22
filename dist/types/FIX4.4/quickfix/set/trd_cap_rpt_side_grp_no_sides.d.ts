/// <reference types="node" />
import { IParties } from './parties';
import { IClrInstGrp } from './clr_inst_grp';
import { ICommissionData } from './commission_data';
import { IContAmtGrp } from './cont_amt_grp';
import { IStipulations } from './stipulations';
import { IMiscFeesGrp } from './misc_fees_grp';
import { ITrdAllocGrp } from './trd_alloc_grp';
export interface ITrdCapRptSideGrpNoSides {
    Side: string;
    OrderID: string;
    SecondaryOrderID?: string;
    ClOrdID?: string;
    SecondaryClOrdID?: string;
    ListID?: string;
    Parties: IParties;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    ProcessCode?: string;
    OddLot?: boolean;
    ClrInstGrp: IClrInstGrp;
    TradeInputSource?: string;
    TradeInputDevice?: string;
    OrderInputDevice?: string;
    Currency?: string;
    ComplianceID?: string;
    SolicitedFlag?: boolean;
    OrderCapacity?: string;
    OrderRestrictions?: string;
    CustOrderCapacity?: number;
    OrdType?: string;
    ExecInst?: string;
    TransBkdTime?: Date;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    TimeBracket?: string;
    CommissionData: ICommissionData;
    GrossTradeAmt?: number;
    NumDaysInterest?: number;
    ExDate?: Date;
    AccruedInterestRate?: number;
    AccruedInterestAmt?: number;
    InterestAtMaturity?: number;
    EndAccruedInterestAmt?: number;
    StartCash?: number;
    EndCash?: number;
    Concession?: number;
    TotalTakedown?: number;
    NetMoney?: number;
    SettlCurrAmt?: number;
    SettlCurrency?: string;
    SettlCurrFxRate?: number;
    SettlCurrFxRateCalc?: string;
    PositionEffect?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    SideMultiLegReportingType?: number;
    ContAmtGrp: IContAmtGrp;
    Stipulations: IStipulations;
    MiscFeesGrp: IMiscFeesGrp;
    ExchangeRule?: string;
    TradeAllocIndicator?: number;
    PreallocMethod?: string;
    AllocID?: string;
    TrdAllocGrp: ITrdAllocGrp;
}
