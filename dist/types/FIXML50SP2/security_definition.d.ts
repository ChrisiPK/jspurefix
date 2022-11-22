/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { IFinancingDetails } from './set/financing_details';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IRelatedInstrumentGrp } from './set/related_instrument_grp';
import { ISecurityClassificationGrp } from './set/security_classification_grp';
import { IStipulations } from './set/stipulations';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IYieldData } from './set/yield_data';
import { IMarketSegmentGrp } from './set/market_segment_grp';
export interface ISecurityDefinition {
    SecurityReportID?: number;
    ClearingBusinessDate?: Date;
    SecurityReqID?: string;
    OrderRequestID?: number;
    SecurityResponseID?: string;
    SecurityResponseType?: number;
    SecurityRequestResult?: number;
    SecurityRejectReason?: number;
    CorporateAction?: string;
    Currency?: string;
    PreviousAdjustedOpenInterest?: number;
    PreviousUnadjustedOpenInterest?: number;
    PriorSettlPrice?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    NumOfSimpleInstruments?: number;
    NumOfComplexInstruments?: number;
    LastUpdateTime?: Date;
    EffectiveBusinessDate?: Date;
    TransactTime?: Date;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    RelatedInstrumentGrp?: IRelatedInstrumentGrp[];
    SecurityClassificationGrp?: ISecurityClassificationGrp[];
    Stipulations?: IStipulations[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    YieldData?: IYieldData;
    MarketSegmentGrp?: IMarketSegmentGrp[];
}
