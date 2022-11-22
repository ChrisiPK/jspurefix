import { IUnderlyingPaymentStubEndDateBusinessCenterGrp } from './underlying_payment_stub_end_date_business_center_grp';
export interface IUnderlyingPaymentStubEndDate {
    UnderlyingPaymentStubEndDateUnadjusted?: Date;
    UnderlyingPaymentStubEndDateBusinessDayConvention?: number;
    UnderlyingPaymentStubEndDateRelativeTo?: number;
    UnderlyingPaymentStubEndDateOffsetPeriod?: number;
    UnderlyingPaymentStubEndDateOffsetUnit?: string;
    UnderlyingPaymentStubEndDateOffsetDayType?: number;
    UnderlyingPaymentStubEndDateAdjusted?: Date;
    UnderlyingPaymentStubEndDateBusinessCenterGrp?: IUnderlyingPaymentStubEndDateBusinessCenterGrp[];
}
