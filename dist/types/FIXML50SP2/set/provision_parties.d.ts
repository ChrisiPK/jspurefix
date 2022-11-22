import { IProvisionPtysSubGrp } from './provision_ptys_sub_grp';
export interface IProvisionParties {
    ProvisionPartyID?: string;
    ProvisionPartyIDSource?: string;
    ProvisionPartyRole?: number;
    ProvisionPartyRoleQualifier?: number;
    ProvisionPtysSubGrp?: IProvisionPtysSubGrp[];
}
