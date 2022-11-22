/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IRequestingPartyGrp } from './set/requesting_party_grp';
import { IParties } from './set/parties';
import { IRelatedPartyDetailGrp } from './set/related_party_detail_grp';
import { IInstrument } from './set/instrument';
import { ILegOrdGrp } from './set/leg_ord_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
export interface IPartyRiskLimitCheckRequest {
    RiskLimitCheckRequestID?: string;
    RiskLimitCheckID?: string;
    RiskLimitCheckTransType: number;
    RiskLimitCheckType: number;
    RiskLimitCheckRequestRefID?: number;
    RefOrderID?: string;
    RefOrderIDSource?: string;
    RiskLimitCheckRequestType?: number;
    RiskLimitCheckAmount?: number;
    Currency?: string;
    RiskLimitID?: string;
    Side?: string;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    RequestingPartyGrp?: IRequestingPartyGrp[];
    Parties?: IParties[];
    RelatedPartyDetailGrp?: IRelatedPartyDetailGrp[];
    Instrument?: IInstrument;
    LegOrdGrp?: ILegOrdGrp[];
    UndInstrmtGrp?: IUndInstrmtGrp[];
}
