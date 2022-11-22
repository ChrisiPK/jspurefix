import { IUnderlyingComplexEventDateBusinessCenterGrp } from './underlying_complex_event_date_business_center_grp';
export interface IUnderlyingComplexEventRelativeDate {
    UnderlyingComplexEventDateUnadjusted?: Date;
    UnderlyingComplexEventDateRelativeTo?: number;
    UnderlyingComplexEventDateOffsetPeriod?: number;
    UnderlyingComplexEventDateOffsetUnit?: string;
    UnderlyingComplexEventDateOffsetDayType?: number;
    UnderlyingComplexEventDateBusinessDayConvention?: number;
    UnderlyingComplexEventDateAdjusted?: Date;
    UnderlyingComplexEventFixingTime?: string;
    UnderlyingComplexEventFixingTimeBusinessCenter?: string;
    UnderlyingComplexEventDateBusinessCenterGrp?: IUnderlyingComplexEventDateBusinessCenterGrp[];
}
