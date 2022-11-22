import { ILegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp } from './leg_payment_stream_non_deliverable_fixing_dates_business_center_grp';
import { ILegPaymentStreamNonDeliverableSettlRateSource } from './leg_payment_stream_non_deliverable_settl_rate_source';
import { ILegPaymentStreamNonDeliverableFixingDateGrp } from './leg_payment_stream_non_deliverable_fixing_date_grp';
import { ILegSettlRateDisruptionFallbackGrp } from './leg_settl_rate_disruption_fallback_grp';
export interface ILegPaymentStreamNonDeliverableSettlTerms {
    LegPaymentStreamNonDeliverableRefCurrency?: string;
    LegPaymentStreamNonDeliverableFixingDatesBusinessDayConvention?: number;
    LegPaymentStreamNonDeliverableFixingDatesRelativeTo?: number;
    LegPaymentStreamNonDeliverableFixingDatesOffsetPeriod?: number;
    LegPaymentStreamNonDeliverableFixingDatesOffsetUnit?: string;
    LegPaymentStreamNonDeliverableFixingDatesOffsetDayType?: number;
    LegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp?: ILegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp[];
    LegPaymentStreamNonDeliverableSettlRateSource?: ILegPaymentStreamNonDeliverableSettlRateSource;
    LegPaymentStreamNonDeliverableFixingDateGrp?: ILegPaymentStreamNonDeliverableFixingDateGrp;
    LegSettlRateDisruptionFallbackGrp?: ILegSettlRateDisruptionFallbackGrp[];
}
