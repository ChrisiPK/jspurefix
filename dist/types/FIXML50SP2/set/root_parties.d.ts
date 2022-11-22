import { IRootSubParties } from './root_sub_parties';
export interface IRootParties {
    RootPartyID?: string;
    RootPartyIDSource?: string;
    RootPartyRole?: number;
    RootPartyRoleQualifier?: number;
    RootSubParties?: IRootSubParties[];
}
