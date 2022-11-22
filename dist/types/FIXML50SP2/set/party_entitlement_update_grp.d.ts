import { IPartyDetailGrp } from './party_detail_grp';
import { IEntitlementGrp } from './entitlement_grp';
export interface IPartyEntitlementUpdateGrp {
    ListUpdateAction?: string;
    EntitlementStatus?: number;
    EntitlementRefID?: string;
    PartyDetailGrp?: IPartyDetailGrp[];
    EntitlementGrp?: IEntitlementGrp[];
}
