import { IPartyDetailGrp } from './party_detail_grp';
import { IEntitlementGrp } from './entitlement_grp';
export interface IPartyEntitlementGrp {
    EntitlementStatus?: number;
    PartyDetailGrp?: IPartyDetailGrp[];
    EntitlementGrp?: IEntitlementGrp[];
}
