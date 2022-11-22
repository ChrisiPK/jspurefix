import { IComplexEventDateBusinessCenterGrp } from './complex_event_date_business_center_grp';
export interface IComplexEventRelativeDate {
    ComplexEventDateUnadjusted?: Date;
    ComplexEventDateRelativeTo?: number;
    ComplexEventDateOffsetPeriod?: number;
    ComplexEventDateOffsetUnit?: string;
    ComplexEventDateOffsetDayType?: number;
    ComplexEventDateBusinessDayConvention?: number;
    ComplexEventDateAdjusted?: Date;
    ComplexEventFixingTime?: string;
    ComplexEventFixingTimeBusinessCenter?: string;
    ComplexEventDateBusinessCenterGrp?: IComplexEventDateBusinessCenterGrp[];
}
