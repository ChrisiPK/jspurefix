import { IPtysSubGrp } from './ptys_sub_grp';
export interface IParties {
    PartyID?: string;
    PartyIDSource?: string;
    PartyRole?: number;
    PtysSubGrp?: IPtysSubGrp[];
}
