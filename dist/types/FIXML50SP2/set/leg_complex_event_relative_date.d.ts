import { ILegComplexEventDateBusinessCenterGrp } from './leg_complex_event_date_business_center_grp';
export interface ILegComplexEventRelativeDate {
    LegComplexEventDateUnadjusted?: Date;
    LegComplexEventDateRelativeTo?: number;
    LegComplexEventDateOffsetPeriod?: number;
    LegComplexEventDateOffsetUnit?: string;
    LegComplexEventDateOffsetDayType?: number;
    LegComplexEventDateBusinessDayConvention?: number;
    LegComplexEventDateAdjusted?: Date;
    LegComplexEventFixingTime?: string;
    LegComplexEventFixingTimeBusinessCenter?: string;
    LegComplexEventDateBusinessCenterGrp?: ILegComplexEventDateBusinessCenterGrp[];
}
