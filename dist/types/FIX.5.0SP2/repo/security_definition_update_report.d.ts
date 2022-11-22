/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IStipulations } from './set/stipulations';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IYieldData } from './set/yield_data';
import { IMarketSegmentGrp } from './set/market_segment_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityDefinitionUpdateReport {
    StandardHeader: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    SecurityReportID?: number;
    SecurityReqID?: string;
    SecurityResponseID?: string;
    SecurityResponseType?: number;
    ClearingBusinessDate?: Date;
    SecurityUpdateAction?: string;
    CorporateAction?: string;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    UndInstrmtGrp?: IUndInstrmtGrp;
    Currency?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    Stipulations?: IStipulations[];
    InstrmtLegGrp?: IInstrmtLegGrp;
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    YieldData?: IYieldData;
    MarketSegmentGrp?: IMarketSegmentGrp[];
    StandardTrailer: IStandardTrailer;
    TransactTime?: Date;
}
