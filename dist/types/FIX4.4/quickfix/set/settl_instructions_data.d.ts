import { IDlvyInstGrp } from './dlvy_inst_grp';
export interface ISettlInstructionsData {
    SettlDeliveryType?: number;
    StandInstDbType?: number;
    StandInstDbName?: string;
    StandInstDbID?: string;
    DlvyInstGrp?: IDlvyInstGrp;
}
