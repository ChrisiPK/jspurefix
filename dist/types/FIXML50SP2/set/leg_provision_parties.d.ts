import { ILegProvisionPtysSubGrp } from './leg_provision_ptys_sub_grp';
export interface ILegProvisionParties {
    LegProvisionPartyID?: string;
    SecurityIDSource?: string;
    LegProvisionPartyRole?: number;
    LegProvisionPartyRoleQualifier?: number;
    LegProvisionPtysSubGrp?: ILegProvisionPtysSubGrp[];
}
