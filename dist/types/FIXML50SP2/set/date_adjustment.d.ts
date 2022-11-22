import { IBusinessCenterGrp } from './business_center_grp';
export interface IDateAdjustment {
    BusinessDayConvention?: number;
    DateRollConvention?: string;
    BusinessCenterGrp?: IBusinessCenterGrp[];
}
