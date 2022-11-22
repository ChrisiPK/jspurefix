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
export interface INewOrderCross {
    CrossID: string;
    OrderRequestID?: number;
    CrossType: number;
    CrossPrioritization: number;
    SettlType?: string;
    SettlDate?: Date;
    HandlInst?: string;
    ExecInst?: string;
    MinQty?: number;
    MinQtyMethod?: number;
    MatchIncrement?: number;
    MaxPriceLevels?: number;
    MaxFloor?: number;
    MarketSegmentID?: string;
    ExDestination?: string;
    ExDestinationIDSource?: string;
    ProcessCode?: string;
    PrevClosePx?: number;
    LocateReqd?: boolean;
    TransactTime: Date;
    TransBkdTime?: Date;
    OrdType: string;
    PriceType?: number;
    Price?: number;
    PriceProtectionScope?: string;
    StopPx?: number;
    Currency?: string;
    ComplianceID?: string;
    IOIID?: string;
    QuoteID?: string;
    TimeInForce?: string;
    EffectiveTime?: Date;
    ExpireDate?: Date;
    ExpireTime?: Date;
    GTBookingInst?: number;
    ExposureDuration?: number;
    ExposureDurationUnit?: number;
    TradingCapacity?: number;
    MaxShow?: number;
    TargetStrategy?: number;
    TargetStrategyParameters?: string;
    ParticipationRate?: number;
    CancellationRights?: string;
    MoneyLaunderingStatus?: string;
    RegistID?: string;
    Designation?: string;
    ThrottleInst?: number;
    StandardHeader?: IStandardHeader;
    RootParties?: IRootParties[];
    SideCrossOrdModGrp?: ISideCrossOrdModGrp[];
    Instrument?: IInstrument;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    DisplayInstruction?: IDisplayInstruction;
    TrdgSesGrp?: ITrdgSesGrp[];
    Stipulations?: IStipulations[];
    TriggeringInstruction?: ITriggeringInstruction;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    YieldData?: IYieldData;
    PegInstructions?: IPegInstructions;
    DiscretionInstructions?: IDiscretionInstructions;
    StrategyParametersGrp?: IStrategyParametersGrp[];
}