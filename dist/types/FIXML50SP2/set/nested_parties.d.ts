import { INstdPtysSubGrp } from './nstd_ptys_sub_grp';
export interface INestedParties {
    NestedPartyID?: string;
    NestedPartyIDSource?: string;
    NestedPartyRole?: number;
    NestedPartyRoleQualifier?: number;
    NstdPtysSubGrp?: INstdPtysSubGrp[];
}
