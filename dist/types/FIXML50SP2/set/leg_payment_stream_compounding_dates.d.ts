import { ILegPaymentStreamCompoundingDatesBusinessCenterGrp } from './leg_payment_stream_compounding_dates_business_center_grp';
import { ILegPaymentStreamCompoundingDateGrp } from './leg_payment_stream_compounding_date_grp';
import { ILegPaymentStreamCompoundingStartDate } from './leg_payment_stream_compounding_start_date';
import { ILegPaymentStreamCompoundingEndDate } from './leg_payment_stream_compounding_end_date';
export interface ILegPaymentStreamCompoundingDates {
    LegPaymentStreamCompoundingDatesBusinessDayConvention?: number;
    LegPaymentStreamCompoundingDatesRelativeTo?: number;
    LegPaymentStreamCompoundingDatesOffsetPeriod?: number;
    LegPaymentStreamCompoundingDatesOffsetUnit?: string;
    LegPaymentStreamCompoundingDatesOffsetDayType?: number;
    LegPaymentStreamCompoundingPeriodSkip?: number;
    LegPaymentStreamCompoundingFrequencyPeriod?: number;
    LegPaymentStreamCompoundingFrequencyUnit?: string;
    LegPaymentStreamCompoundingRollConvention?: string;
    LegPaymentStreamBoundsFirstDateUnadjusted?: Date;
    LegPaymentStreamBoundsLastDateUnadjusted?: Date;
    LegPaymentStreamCompoundingDatesBusinessCenterGrp?: ILegPaymentStreamCompoundingDatesBusinessCenterGrp[];
    LegPaymentStreamCompoundingDateGrp?: ILegPaymentStreamCompoundingDateGrp[];
    LegPaymentStreamCompoundingStartDate?: ILegPaymentStreamCompoundingStartDate;
    LegPaymentStreamCompoundingEndDate?: ILegPaymentStreamCompoundingEndDate;
}
