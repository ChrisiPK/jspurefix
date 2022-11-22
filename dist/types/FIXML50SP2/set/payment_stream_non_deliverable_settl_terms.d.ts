import { IPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp } from './payment_stream_non_deliverable_fixing_dates_business_center_grp';
import { IPaymentStreamNonDeliverableSettlRateSource } from './payment_stream_non_deliverable_settl_rate_source';
import { IPaymentStreamNonDeliverableFixingDateGrp } from './payment_stream_non_deliverable_fixing_date_grp';
import { ISettlRateDisruptionFallbackGrp } from './settl_rate_disruption_fallback_grp';
export interface IPaymentStreamNonDeliverableSettlTerms {
    PaymentStreamNonDeliverableRefCurrency?: string;
    PaymentStreamNonDeliverableFixingDatesBusinessDayConvention?: number;
    PaymentStreamNonDeliverableFixingDatesRelativeTo?: number;
    PaymentStreamNonDeliverableFixingDatesOffsetPeriod?: number;
    PaymentStreamNonDeliverableFixingDatesOffsetUnit?: string;
    PaymentStreamNonDeliverableFixingDatesOffsetDayType?: number;
    PaymentStreamNonDeliverableFixingDatesBusinessCenterGrp?: IPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp[];
    PaymentStreamNonDeliverableSettlRateSource?: IPaymentStreamNonDeliverableSettlRateSource;
    PaymentStreamNonDeliverableFixingDateGrp?: IPaymentStreamNonDeliverableFixingDateGrp;
    SettlRateDisruptionFallbackGrp?: ISettlRateDisruptionFallbackGrp[];
}
