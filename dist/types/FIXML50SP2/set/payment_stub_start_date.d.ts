import { IPaymentStubStartDateBusinessCenterGrp } from './payment_stub_start_date_business_center_grp';
export interface IPaymentStubStartDate {
    PaymentStubStartDateUnadjusted?: Date;
    PaymentStubStartDateBusinessDayConvention?: number;
    PaymentStubStartDateRelativeTo?: number;
    PaymentStubStartDateOffsetPeriod?: number;
    PaymentStubStartDateOffsetUnit?: string;
    PaymentStubStartDateOffsetDayType?: number;
    PaymentStubStartDateAdjusted?: Date;
    PaymentStubStartDateBusinessCenterGrp?: IPaymentStubStartDateBusinessCenterGrp[];
}
