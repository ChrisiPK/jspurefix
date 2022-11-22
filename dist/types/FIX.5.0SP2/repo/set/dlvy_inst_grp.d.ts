import { ISettlParties } from './settl_parties';
export interface IDlvyInstGrp {
    SettlInstSource?: string;
    DlvyInstType?: string;
    SettlParties?: ISettlParties[];
}
