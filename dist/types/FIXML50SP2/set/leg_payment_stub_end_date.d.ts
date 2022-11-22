import { ILegPaymentStubEndDateBusinessCenterGrp } from './leg_payment_stub_end_date_business_center_grp';
export interface ILegPaymentStubEndDate {
    LegPaymentStubEndDateUnadjusted?: Date;
    LegPaymentStubEndDateBusinessDayConvention?: number;
    LegPaymentStubEndDateRelativeTo?: number;
    LegPaymentStubEndDateOffsetPeriod?: number;
    LegPaymentStubEndDateOffsetUnit?: string;
    LegPaymentStubEndDateOffsetDayType?: number;
    LegPaymentStubEndDateAdjusted?: Date;
    LegPaymentStubEndDateBusinessCenterGrp?: ILegPaymentStubEndDateBusinessCenterGrp[];
}
