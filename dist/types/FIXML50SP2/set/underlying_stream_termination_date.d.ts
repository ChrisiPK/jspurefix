import { IUnderlyingStreamTerminationDateBusinessCenterGrp } from './underlying_stream_termination_date_business_center_grp';
export interface IUnderlyingStreamTerminationDate {
    UnderlyingStreamTerminationDateUnadjusted?: Date;
    UnderlyingStreamTerminationDateBusinessDayConvention?: number;
    UnderlyingStreamTerminationDateRelativeTo?: number;
    UnderlyingStreamTerminationDateOffsetPeriod?: number;
    UnderlyingStreamTerminationDateOffsetUnit?: string;
    UnderlyingStreamTerminationDateOffsetDayType?: number;
    UnderlyingStreamTerminationDateAdjusted?: Date;
    UnderlyingStreamTerminationDateBusinessCenterGrp?: IUnderlyingStreamTerminationDateBusinessCenterGrp[];
}
