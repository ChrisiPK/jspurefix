import { IUnderlyingProvisionPtysSubGrp } from './underlying_provision_ptys_sub_grp';
export interface IUnderlyingProvisionParties {
    UnderlyingProvisionPartyID?: string;
    UnderlyingProvisionPartyIDSource?: string;
    UnderlyingProvisionPartyRole?: number;
    UnderlyingProvisionPartyRoleQualifier?: number;
    UnderlyingProvisionPtysSubGrp?: IUnderlyingProvisionPtysSubGrp[];
}
