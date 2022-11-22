/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IOrdAllocGrp } from './set/ord_alloc_grp';
import { ITrdRegTimestamps } from './set/trd_reg_timestamps';
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { IFinancingDetails } from './set/financing_details';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IYieldData } from './set/yield_data';
import { ICpctyConfGrp } from './set/cpcty_conf_grp';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { ISettlInstructionsData } from './set/settl_instructions_data';
import { ICommissionData } from './set/commission_data';
import { IStipulations } from './set/stipulations';
import { IMiscFeesGrp } from './set/misc_fees_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IConfirmation {
    StandardHeader: IStandardHeader;
    ConfirmID: string;
    ConfirmRefID?: string;
    ConfirmReqID?: string;
    ConfirmTransType: number;
    ConfirmType: number;
    CopyMsgIndicator?: boolean;
    LegalConfirm?: boolean;
    ConfirmStatus: number;
    Parties?: IParties;
    OrdAllocGrp?: IOrdAllocGrp;
    AllocID?: string;
    SecondaryAllocID?: string;
    IndividualAllocID?: string;
    TransactTime: Date;
    TradeDate: Date;
    TrdRegTimestamps?: ITrdRegTimestamps;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp;
    InstrmtLegGrp?: IInstrmtLegGrp;
    YieldData?: IYieldData;
    AllocQty: number;
    QtyType?: number;
    Side: string;
    Currency?: string;
    LastMkt?: string;
    CpctyConfGrp?: ICpctyConfGrp;
    AllocAccount: string;
    AllocAcctIDSource?: number;
    AllocAccountType?: number;
    AvgPx: number;
    AvgPxPrecision?: number;
    PriceType?: number;
    AvgParPx?: number;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    ReportedPx?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    ProcessCode?: string;
    GrossTradeAmt: number;
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
    NetMoney: number;
    MaturityNetMoney?: number;
    SettlCurrAmt?: number;
    SettlCurrency?: string;
    SettlCurrFxRate?: number;
    SettlCurrFxRateCalc?: string;
    SettlType?: string;
    SettlDate?: Date;
    SettlInstructionsData?: ISettlInstructionsData;
    CommissionData?: ICommissionData;
    SharedCommission?: number;
    Stipulations?: IStipulations;
    MiscFeesGrp?: IMiscFeesGrp;
    StandardTrailer: IStandardTrailer;
}
