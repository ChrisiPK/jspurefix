import { IPartyDetailGrp } from './party_detail_grp';
import { IRiskLimitsGrp } from './risk_limits_grp';
export interface IPartyRiskLimitsUpdateGrp {
    ListUpdateAction?: string;
    RiskLimitID?: string;
    RiskLimitCheckModelType?: number;
    PartyRiskLimitStatus?: number;
    PartyDetailGrp?: IPartyDetailGrp[];
    RiskLimitsGrp?: IRiskLimitsGrp[];
}
