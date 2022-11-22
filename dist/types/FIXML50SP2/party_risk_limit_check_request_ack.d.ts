/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IRequestingPartyGrp } from './set/requesting_party_grp';
import { IParties } from './set/parties';
import { IRelatedPartyDetailGrp } from './set/related_party_detail_grp';
import { IInstrument } from './set/instrument';
import { ILegOrdGrp } from './set/leg_ord_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
export interface IPartyRiskLimitCheckRequestAck {
    RiskLimitCheckRequestID?: string;
    RiskLimitCheckID?: string;
    RiskLimitCheckRequestStatus: number;
    RiskLimitCheckRequestResult?: number;
    RiskLimitCheckTransType: number;
    RiskLimitCheckType: number;
    RiskLimitCheckRequestRefID?: number;
    RejectText?: string;
    EncodedRejectTextLen?: number;
    EncodedRejectText?: Buffer;
    RefOrderID?: string;
    RefOrderIDSource?: string;
    Side?: string;
    RiskLimitApprovedAmount?: number;
    RiskLimitCheckAmount?: number;
    RiskLimitID?: string;
    Currency?: string;
    ExpireTime?: Date;
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
