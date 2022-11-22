import { IRelatedPartyDetailSubGrp } from './related_party_detail_sub_grp';
import { IRelatedPartyDetailAltIDGrp } from './related_party_detail_alt_id_grp';
import { IPartyRelationshipGrp } from './party_relationship_grp';
export interface IRelatedPartyDetailGrp {
    RelatedPartyDetailID?: string;
    RelatedPartyDetailIDSource?: string;
    RelatedPartyDetailRole?: number;
    RelatedPartyDetailRoleQualifier?: number;
    RelatedPartyDetailSubGrp?: IRelatedPartyDetailSubGrp[];
    RelatedPartyDetailAltIDGrp?: IRelatedPartyDetailAltIDGrp[];
    PartyRelationshipGrp?: IPartyRelationshipGrp[];
}
