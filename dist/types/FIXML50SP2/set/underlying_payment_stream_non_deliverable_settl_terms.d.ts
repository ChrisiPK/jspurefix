import { IUnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp } from './underlying_payment_stream_non_deliverable_fixing_dates_business_center_grp';
import { IUnderlyingPaymentStreamNonDeliverableSettlRateSource } from './underlying_payment_stream_non_deliverable_settl_rate_source';
import { IUnderlyingPaymentStreamNonDeliverableFixingDateGrp } from './underlying_payment_stream_non_deliverable_fixing_date_grp';
import { IUnderlyingSettlRateDisruptionFallbackGrp } from './underlying_settl_rate_disruption_fallback_grp';
export interface IUnderlyingPaymentStreamNonDeliverableSettlTerms {
    UnderlyingPaymentStreamNonDeliverableRefCurrency?: string;
    UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessDayConvention?: number;
    UnderlyingPaymentStreamNonDeliverableFixingDatesRelativeTo?: number;
    UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetPeriod?: number;
    UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetUnit?: string;
    UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetDayType?: number;
    UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp?: IUnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp[];
    UnderlyingPaymentStreamNonDeliverableSettlRateSource?: IUnderlyingPaymentStreamNonDeliverableSettlRateSource;
    UnderlyingPaymentStreamNonDeliverableFixingDateGrp?: IUnderlyingPaymentStreamNonDeliverableFixingDateGrp;
    UnderlyingSettlRateDisruptionFallbackGrp?: IUnderlyingSettlRateDisruptionFallbackGrp[];
}
