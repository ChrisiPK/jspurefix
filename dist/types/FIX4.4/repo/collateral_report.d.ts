/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IExecCollGrp } from './set/exec_coll_grp';
import { ITrdCollGrp } from './set/trd_coll_grp';
import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { ITrdRegTimestamps } from './set/trd_reg_timestamps';
import { IMiscFeesGrp } from './set/misc_fees_grp';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IStipulations } from './set/stipulations';
import { ISettlInstructionsData } from './set/settl_instructions_data';
import { IStandardTrailer } from './set/standard_trailer';
export interface ICollateralReport {
    StandardHeader: IStandardHeader;
    CollRptID: string;
    CollInquiryID?: string;
    CollStatus: number;
    TotNumReports?: number;
    LastRptRequested?: boolean;
    Parties?: IParties[];
    Account?: string;
    AccountType?: number;
    ClOrdID?: string;
    OrderID?: string;
    SecondaryOrderID?: string;
    SecondaryClOrdID?: string;
    ExecCollGrp?: IExecCollGrp[];
    TrdCollGrp?: ITrdCollGrp[];
    Instrument?: IInstrument;
    FinancingDetails?: IFinancingDetails;
    SettlDate?: Date;
    Quantity?: number;
    QtyType?: number;
    Currency?: string;
    InstrmtLegGrp?: IInstrmtLegGrp[];
    UndInstrmtGrp?: IUndInstrmtGrp[];
    MarginExcess?: number;
    TotalNetValue?: number;
    CashOutstanding?: number;
    TrdRegTimestamps?: ITrdRegTimestamps[];
    Side?: string;
    MiscFeesGrp?: IMiscFeesGrp[];
    Price?: number;
    PriceType?: number;
    AccruedInterestAmt?: number;
    EndAccruedInterestAmt?: number;
    StartCash?: number;
    EndCash?: number;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    Stipulations?: IStipulations[];
    SettlInstructionsData?: ISettlInstructionsData;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SettlSessID?: string;
    SettlSessSubID?: string;
    ClearingBusinessDate?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
