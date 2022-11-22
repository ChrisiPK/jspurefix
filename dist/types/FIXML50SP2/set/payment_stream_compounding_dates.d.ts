import { IPaymentStreamCompoundingDatesBusinessCenterGrp } from './payment_stream_compounding_dates_business_center_grp';
import { IPaymentStreamCompoundingDateGrp } from './payment_stream_compounding_date_grp';
import { IPaymentStreamCompoundingStartDate } from './payment_stream_compounding_start_date';
import { IPaymentStreamCompoundingEndDate } from './payment_stream_compounding_end_date';
export interface IPaymentStreamCompoundingDates {
    PaymentStreamCompoundingDatesBusinessDayConvention?: number;
    PaymentStreamCompoundingDatesRelativeTo?: number;
    PaymentStreamCompoundingDatesOffsetPeriod?: number;
    PaymentStreamCompoundingDatesOffsetUnit?: string;
    PaymentStreamCompoundingDatesOffsetDayType?: number;
    PaymentStreamCompoundingPeriodSkip?: number;
    PaymentStreamCompoundingFrequencyPeriod?: number;
    PaymentStreamCompoundingFrequencyUnit?: string;
    PaymentStreamCompoundingRollConvention?: string;
    PaymentStreamBoundsFirstDateUnadjusted?: Date;
    PaymentStreamBoundsLastDateUnadjusted?: Date;
    PaymentStreamCompoundingDatesBusinessCenterGrp?: IPaymentStreamCompoundingDatesBusinessCenterGrp[];
    PaymentStreamCompoundingDateGrp?: IPaymentStreamCompoundingDateGrp;
    PaymentStreamCompoundingStartDate?: IPaymentStreamCompoundingStartDate;
    PaymentStreamCompoundingEndDate?: IPaymentStreamCompoundingEndDate;
}
