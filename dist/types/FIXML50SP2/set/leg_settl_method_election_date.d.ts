import { ILegSettlMethodElectionDateBusinessCenterGrp } from './leg_settl_method_election_date_business_center_grp';
export interface ILegSettlMethodElectionDate {
    LegSettlMethodElectionDateUnadjusted?: Date;
    LegSettlMethodElectionDateBusinessDayConvention?: number;
    LegSettlMethodElectionDateRelativeTo?: number;
    LegSettlMethodElectionDateOffsetPeriod?: number;
    LegSettlMethodElectionDateOffsetUnit?: string;
    LegSettlMethodElectionDateOffsetDayType?: number;
    LegSettlMethodElectionDateAdjusted?: Date;
    LegSettlMethodElectionDateBusinessCenterGrp?: ILegSettlMethodElectionDateBusinessCenterGrp[];
}
