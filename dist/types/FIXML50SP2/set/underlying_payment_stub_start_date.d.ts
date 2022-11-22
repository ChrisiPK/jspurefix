import { IUnderlyingPaymentStubStartDateBusinessCenterGrp } from './underlying_payment_stub_start_date_business_center_grp';
export interface IUnderlyingPaymentStubStartDate {
    UnderlyingPaymentStubStartDateUnadjusted?: Date;
    UnderlyingPaymentStubStartDateBusinessDayConvention?: number;
    UnderlyingPaymentStubStartDateRelativeTo?: number;
    UnderlyingPaymentStubStartDateOffsetPeriod?: number;
    UnderlyingPaymentStubStartDateOffsetUnit?: string;
    UnderlyingPaymentStubStartDateOffsetDayType?: number;
    UnderlyingPaymentStubStartDateAdjusted?: Date;
    UnderlyingPaymentStubStartDateBusinessCenterGrp?: IUnderlyingPaymentStubStartDateBusinessCenterGrp[];
}
