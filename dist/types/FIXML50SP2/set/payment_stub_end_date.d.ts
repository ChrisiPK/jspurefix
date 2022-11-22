import { IPaymentStubEndDateBusinessCenterGrp } from './payment_stub_end_date_business_center_grp';
export interface IPaymentStubEndDate {
    PaymentStubEndDateUnadjusted?: Date;
    PaymentStubEndDateBusinessDayConvention?: number;
    PaymentStubEndDateRelativeTo?: number;
    PaymentStubEndDateOffsetPeriod?: number;
    PaymentStubEndDateOffsetUnit?: string;
    PaymentStubEndDateOffsetDayType?: number;
    PaymentStubEndDateAdjusted?: Date;
    PaymentStubEndDateBusinessCenterGrp?: IPaymentStubEndDateBusinessCenterGrp[];
}
