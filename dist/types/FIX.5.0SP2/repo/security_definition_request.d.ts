/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IStipulations } from './set/stipulations';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IYieldData } from './set/yield_data';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityDefinitionRequest {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    SecurityRequestType: number;
    MarketID?: string;
    MarketSegmentID?: string;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    UndInstrmtGrp?: IUndInstrmtGrp;
    Currency?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Stipulations?: IStipulations[];
    InstrmtLegGrp?: IInstrmtLegGrp;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    YieldData?: IYieldData;
    ExpirationCycle?: number;
    SubscriptionRequestType?: string;
    StandardTrailer: IStandardTrailer;
}
