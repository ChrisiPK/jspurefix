/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { IFinancingDetails } from './set/financing_details';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IRelatedInstrumentGrp } from './set/related_instrument_grp';
export interface ISecurityListRequest {
    SecurityReqID: string;
    SecurityListRequestType: number;
    SecurityListID?: string;
    SecurityListType?: number;
    SecurityListTypeSource?: number;
    MarketID?: string;
    MarketSegmentID?: string;
    Currency?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SubscriptionRequestType?: string;
    StandardHeader?: IStandardHeader;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    RelatedInstrumentGrp?: IRelatedInstrumentGrp[];
}
