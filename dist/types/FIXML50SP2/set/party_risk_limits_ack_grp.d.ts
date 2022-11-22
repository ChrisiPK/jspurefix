/// <reference types="node" />
import { IPartyDetailGrp } from './party_detail_grp';
import { IRiskLimitsGrp } from './risk_limits_grp';
export interface IPartyRiskLimitsAckGrp {
    ListUpdateAction?: string;
    RiskLimitStatus?: number;
    RiskLimitResult?: number;
    RiskLimitID?: string;
    RiskLimitCheckModelType?: number;
    RejectText?: string;
    EncodedRejectTextLen?: number;
    EncodedRejectText?: Buffer;
    PartyRiskLimitStatus?: number;
    PartyDetailGrp?: IPartyDetailGrp[];
    RiskLimitsGrp?: IRiskLimitsGrp[];
}
