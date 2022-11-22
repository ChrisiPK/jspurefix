import { IStreamTerminationDateBusinessCenterGrp } from './stream_termination_date_business_center_grp';
export interface IStreamTerminationDate {
    StreamTerminationDateUnadjusted?: Date;
    StreamTerminationDateBusinessDayConvention?: number;
    StreamTerminationDateRelativeTo?: number;
    StreamTerminationDateOffsetPeriod?: number;
    StreamTerminationDateOffsetUnit?: string;
    StreamTerminationDateOffsetDayType?: number;
    StreamTerminationDateAdjusted?: Date;
    StreamTerminationDateBusinessCenterGrp?: IStreamTerminationDateBusinessCenterGrp[];
}
