import { ISettlPtysSubGrp } from './settl_ptys_sub_grp';
export interface ISettlPartiesNoSettlPartyIDs {
    SettlPartyID?: string;
    SettlPartyIDSource?: string;
    SettlPartyRole?: number;
    SettlPtysSubGrp?: ISettlPtysSubGrp;
}
