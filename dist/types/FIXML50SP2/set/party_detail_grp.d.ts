import { IPartyDetailSubGrp } from './party_detail_sub_grp';
import { IPartyDetailAltIDGrp } from './party_detail_alt_id_grp';
import { IRelatedPartyDetailGrp } from './related_party_detail_grp';
export interface IPartyDetailGrp {
    PartyDetailID?: string;
    PartyDetailIDSource?: string;
    PartyDetailRole?: number;
    PartyDetailRoleQualifier?: number;
    PartyDetailStatus?: number;
    PartyDetailSubGrp?: IPartyDetailSubGrp[];
    PartyDetailAltIDGrp?: IPartyDetailAltIDGrp[];
    RelatedPartyDetailGrp?: IRelatedPartyDetailGrp[];
}
