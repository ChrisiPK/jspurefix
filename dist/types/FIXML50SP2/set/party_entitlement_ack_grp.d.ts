/// <reference types="node" />
import { IPartyDetailGrp } from './party_detail_grp';
import { IEntitlementGrp } from './entitlement_grp';
export interface IPartyEntitlementAckGrp {
    ListUpdateAction?: string;
    EntitlementStatus?: number;
    EntitlementResult?: number;
    RejectText?: string;
    EncodedRejectTextLen?: number;
    EncodedRejectText?: Buffer;
    EntitlementRefID?: string;
    PartyDetailGrp?: IPartyDetailGrp[];
    EntitlementGrp?: IEntitlementGrp[];
}
