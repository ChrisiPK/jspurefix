import { ILegStreamTerminationDateBusinessCenterGrp } from './leg_stream_termination_date_business_center_grp';
export interface ILegStreamTerminationDate {
    LegStreamTerminationDateUnadjusted?: Date;
    LegStreamTerminationDateBusinessDayConvention?: number;
    LegStreamTerminationDateRelativeTo?: number;
    LegStreamTerminationDateOffsetPeriod?: number;
    LegStreamTerminationDateOffsetUnit?: string;
    LegStreamTerminationDateOffsetDayType?: number;
    LegStreamTerminationDateAdjusted?: Date;
    LegStreamTerminationDateBusinessCenterGrp?: ILegStreamTerminationDateBusinessCenterGrp[];
}
