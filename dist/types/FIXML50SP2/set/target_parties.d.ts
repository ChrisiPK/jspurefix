import { ITargetPtysSubGrp } from './target_ptys_sub_grp';
export interface ITargetParties {
    TargetPartyID?: string;
    TargetPartyIDSource?: string;
    TargetPartyRole?: number;
    TargetPartyRoleQualifier?: number;
    TargetPtysSubGrp?: ITargetPtysSubGrp[];
}
