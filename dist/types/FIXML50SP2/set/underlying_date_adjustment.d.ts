import { IUnderlyingBusinessCenterGrp } from './underlying_business_center_grp';
export interface IUnderlyingDateAdjustment {
    UnderlyingBusinessDayConvention?: number;
    UnderlyingDateRollConvention?: string;
    UnderlyingBusinessCenterGrp?: IUnderlyingBusinessCenterGrp[];
}
