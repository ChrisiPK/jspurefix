/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { IFinancingDetails } from './set/financing_details';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IRelatedInstrumentGrp } from './set/related_instrument_grp';
import { IStipulations } from './set/stipulations';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data';
import { IYieldData } from './set/yield_data';
export interface ISecurityDefinitionRequest {
    SecurityReqID: string;
    SecurityRequestType: number;
    MarketID?: string;
    MarketSegmentID?: string;
    Currency?: string;
    ComplianceID?: string;
    ComplianceText?: string;
    EncodedComplianceTextLen?: number;
    EncodedComplianceText?: Buffer;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    ExpirationCycle?: number;
    SubscriptionRequestType?: string;
    StandardHeader?: IStandardHeader;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    RelatedInstrumentGrp?: IRelatedInstrumentGrp[];
    Stipulations?: IStipulations[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData;
    YieldData?: IYieldData;
}
