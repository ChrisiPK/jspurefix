/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { IFinancingDetails } from './set/financing_details';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IRelatedInstrumentGrp } from './set/related_instrument_grp';
import { IMDStatisticRptGrp } from './set/md_statistic_rpt_grp';
export interface IMarketDataStatisticsReport {
    MDStatisticRptID: string;
    MDStatisticReqID?: string;
    SecurityRequestResult?: number;
    UnsolicitedIndicator?: boolean;
    TradeDate?: Date;
    MarketID?: string;
    MarketSegmentID?: string;
    MarketSegmentDesc?: string;
    EncodedMktSegmDescLen?: number;
    EncodedMktSegmDesc?: Buffer;
    SecurityListID?: string;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    Parties?: IParties[];
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    RelatedInstrumentGrp?: IRelatedInstrumentGrp[];
    MDStatisticRptGrp?: IMDStatisticRptGrp[];
}
