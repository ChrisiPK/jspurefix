import { IUnderlyingSettlMethodElectionDateBusinessCenterGrp } from './underlying_settl_method_election_date_business_center_grp';
export interface IUnderlyingSettlMethodElectionDate {
    UnderlyingSettlMethodElectionDateUnadjusted?: Date;
    UnderlyingSettlMethodElectionDateBusinessDayConvention?: number;
    UnderlyingSettlMethodElectionDateRelativeTo?: number;
    UnderlyingSettlMethodElectionDateOffsetPeriod?: number;
    UnderlyingSettlMethodElectionDateOffsetUnit?: string;
    UnderlyingSettlMethodElectionDateOffsetDayType?: number;
    UnderlyingSettlMethodElectionDateAdjusted?: Date;
    UnderlyingSettlMethodElectionDateBusinessCenterGrp?: IUnderlyingSettlMethodElectionDateBusinessCenterGrp[];
}
