import { ILegBusinessCenterGrp } from './leg_business_center_grp';
export interface ILegDateAdjustment {
    LegBusinessDayConvention?: number;
    LegDateRollConvention?: string;
    LegBusinessCenterGrp?: ILegBusinessCenterGrp[];
}
