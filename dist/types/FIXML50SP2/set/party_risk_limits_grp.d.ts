import { IPartyDetailGrp } from './party_detail_grp';
import { IRiskLimitsGrp } from './risk_limits_grp';
export interface IPartyRiskLimitsGrp {
    RiskLimitID?: string;
    RiskLimitCheckModelType?: number;
    PartyRiskLimitStatus?: number;
    PartyDetailGrp?: IPartyDetailGrp[];
    RiskLimitsGrp?: IRiskLimitsGrp[];
}
