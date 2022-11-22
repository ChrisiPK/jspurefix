import { ISettlParties } from './settl_parties';
export interface ISettlDetails {
    SettlObligSource?: string;
    SettlParties?: ISettlParties[];
}
