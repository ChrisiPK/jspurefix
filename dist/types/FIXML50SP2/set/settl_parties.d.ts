import { ISettlPtysSubGrp } from './settl_ptys_sub_grp';
export interface ISettlParties {
    SettlPartyID?: string;
    SettlPartyIDSource?: string;
    SettlPartyRole?: number;
    SettlPartyRoleQualifier?: number;
    SettlPtysSubGrp?: ISettlPtysSubGrp[];
}
