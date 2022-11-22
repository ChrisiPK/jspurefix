/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { IFinancingDetails } from './set/financing_details';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IRelatedInstrumentGrp } from './set/related_instrument_grp';
import { IMDStatisticReqGrp } from './set/md_statistic_req_grp';
export interface IMarketDataStatisticsRequest {
    MDStatisticReqID: string;
    SubscriptionRequestType: string;
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
    Parties?: IParties[];
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    RelatedInstrumentGrp?: IRelatedInstrumentGrp[];
    MDStatisticReqGrp?: IMDStatisticReqGrp[];
}
