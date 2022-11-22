import { ILegPaymentStubStartDateBusinessCenterGrp } from './leg_payment_stub_start_date_business_center_grp';
export interface ILegPaymentStubStartDate {
    LegPaymentStubStartDateUnadjusted?: Date;
    LegPaymentStubStartDateBusinessDayConvention?: number;
    LegPaymentStubStartDateRelativeTo?: number;
    LegPaymentStubStartDateOffsetPeriod?: number;
    LegPaymentStubStartDateOffsetUnit?: string;
    LegPaymentStubStartDateOffsetDayType?: number;
    LegPaymentStubStartDateAdjusted?: Date;
    LegPaymentStubStartDateBusinessCenterGrp?: ILegPaymentStubStartDateBusinessCenterGrp[];
}
