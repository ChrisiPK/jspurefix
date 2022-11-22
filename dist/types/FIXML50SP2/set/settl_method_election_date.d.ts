import { ISettlMethodElectionDateBusinessCenterGrp } from './settl_method_election_date_business_center_grp';
export interface ISettlMethodElectionDate {
    SettlMethodElectionDateUnadjusted?: Date;
    SettlMethodElectionDateBusinessDayConvention?: number;
    SettlMethodElectionDateRelativeTo?: number;
    SettlMethodElectionDateOffsetPeriod?: number;
    SettlMethodElectionDateOffsetUnit?: string;
    SettlMethodElectionDateOffsetDayType?: number;
    SettlMethodElectionDateAdjusted?: Date;
    SettlMethodElectionDateBusinessCenterGrp?: ISettlMethodElectionDateBusinessCenterGrp[];
}
