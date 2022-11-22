import { IStandardHeader } from './set/standard_header';
import { IRootParties } from './set/root_parties';
import { ISideCrossOrdModGrp } from './set/side_cross_ord_mod_grp';
import { IInstrument } from './set/instrument';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IDisplayInstruction } from './set/display_instruction';
import { ITrdgSesGrp } from './set/trdg_ses_grp';
import { IStipulations } from './set/stipulations';
import { ITriggeringInstruction } from './set/triggering_instruction';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IYieldData } from './set/yield_data';
import { IPegInstructions } from './set/peg_instructions';
import { IDiscretionInstructions } from './set/discretion_instructions';
import { IStrategyParametersGrp } from './set/strategy_parameters_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface INewOrderCross {
    StandardHeader: IStandardHeader;
    CrossID: string;
    CrossType: number;
    CrossPrioritization: number;
    RootParties?: IRootParties[];
    SideCrossOrdModGrp: ISideCrossOrdModGrp[];
    Instrument: IInstrument;
    UndInstrmtGrp?: IUndInstrmtGrp;
    InstrmtLegGrp?: IInstrmtLegGrp;
    SettlType?: string;
    SettlDate?: Date;
    HandlInst?: string;
    ExecInst?: string;
    MinQty?: number;
    MatchIncrement?: number;
    MaxPriceLevels?: number;
    DisplayInstruction?: IDisplayInstruction;
    MaxFloor?: number;
    ExDestination?: string;
    ExDestinationIDSource?: string;
    TrdgSesGrp?: ITrdgSesGrp[];
    ProcessCode?: string;
    PrevClosePx?: number;
    LocateReqd?: boolean;
    TransactTime: Date;
    TransBkdTime?: Date;
    Stipulations?: IStipulations[];
    OrdType: string;
    PriceType?: number;
    Price?: number;
    PriceProtectionScope?: string;
    StopPx?: number;
    TriggeringInstruction?: ITriggeringInstruction;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    YieldData?: IYieldData;
    Currency?: string;
    ComplianceID?: string;
    IOIID?: string;
    QuoteID?: string;
    TimeInForce?: string;
    EffectiveTime?: Date;
    ExpireDate?: Date;
    ExpireTime?: Date;
    GTBookingInst?: number;
    MaxShow?: number;
    PegInstructions?: IPegInstructions;
    DiscretionInstructions?: IDiscretionInstructions;
    TargetStrategy?: number;
    StrategyParametersGrp?: IStrategyParametersGrp[];
    TargetStrategyParameters?: string;
    ParticipationRate?: number;
    CancellationRights?: string;
    MoneyLaunderingStatus?: string;
    RegistID?: string;
    Designation?: string;
    StandardTrailer: IStandardTrailer;
}