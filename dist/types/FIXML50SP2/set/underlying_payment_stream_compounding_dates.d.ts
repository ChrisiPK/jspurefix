import { IUnderlyingPaymentStreamCompoundingDatesBusinessCenterGrp } from './underlying_payment_stream_compounding_dates_business_center_grp';
import { IUnderlyingPaymentStreamCompoundingDateGrp } from './underlying_payment_stream_compounding_date_grp';
import { IUnderlyingPaymentStreamCompoundingStartDate } from './underlying_payment_stream_compounding_start_date';
import { IUnderlyingPaymentStreamCompoundingEndDate } from './underlying_payment_stream_compounding_end_date';
export interface IUnderlyingPaymentStreamCompoundingDates {
    UnderlyingPaymentStreamCompoundingDatesBusinessDayConvention?: number;
    UnderlyingPaymentStreamCompoundingDatesRelativeTo?: number;
    UnderlyingPaymentStreamCompoundingDatesOffsetPeriod?: number;
    UnderlyingPaymentStreamCompoundingDatesOffsetUnit?: string;
    UnderlyingPaymentStreamCompoundingDatesOffsetDayType?: number;
    UnderlyingPaymentStreamCompoundingPeriodSkip?: number;
    UnderlyingPaymentStreamCompoundingFrequencyPeriod?: number;
    UnderlyingPaymentStreamCompoundingFrequencyUnit?: string;
    UnderlyingPaymentStreamCompoundingRollConvention?: string;
    UnderlyingPaymentStreamBoundsFirstDateUnadjusted?: Date;
    UnderlyingPaymentStreamBoundsLastDateUnadjusted?: Date;
    UnderlyingPaymentStreamCompoundingDatesBusinessCenterGrp?: IUnderlyingPaymentStreamCompoundingDatesBusinessCenterGrp[];
    UnderlyingPaymentStreamCompoundingDateGrp?: IUnderlyingPaymentStreamCompoundingDateGrp;
    UnderlyingPaymentStreamCompoundingStartDate?: IUnderlyingPaymentStreamCompoundingStartDate;
    UnderlyingPaymentStreamCompoundingEndDate?: IUnderlyingPaymentStreamCompoundingEndDate;
}
