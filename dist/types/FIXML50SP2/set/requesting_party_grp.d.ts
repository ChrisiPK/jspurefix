import { IRequestingPartySubGrp } from './requesting_party_sub_grp';
export interface IRequestingPartyGrp {
    RequestingPartyID?: string;
    RequestingPartyIDSource?: string;
    RequestingPartyRole?: number;
    RequestingPartyRoleQualifier?: number;
    RequestingPartySubGrp?: IRequestingPartySubGrp[];
}
