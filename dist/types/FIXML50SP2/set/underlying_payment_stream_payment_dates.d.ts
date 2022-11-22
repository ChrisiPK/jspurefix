import { IUnderlyingPaymentStreamPaymentDateBusinessCenterGrp } from './underlying_payment_stream_payment_date_business_center_grp';
import { IUnderlyingPaymentStreamPaymentDateGrp } from './underlying_payment_stream_payment_date_grp';
import { IUnderlyingPaymentStreamFinalPricePaymentDate } from './underlying_payment_stream_final_price_payment_date';
export interface IUnderlyingPaymentStreamPaymentDates {
    UnderlyingPaymentStreamPaymentDateBusinessDayConvention?: number;
    UnderlyingPaymentStreamPaymentFrequencyPeriod?: number;
    UnderlyingPaymentStreamPaymentFrequencyUnit?: string;
    UnderlyingPaymentStreamPaymentRollConvention?: string;
    UnderlyingPaymentStreamFirstPaymentDateUnadjusted?: Date;
    UnderlyingPaymentStreamLastRegularPaymentDateUnadjusted?: Date;
    UnderlyingPaymentStreamPaymentDateRelativeTo?: number;
    UnderlyingPaymentStreamPaymentDateOffsetPeriod?: number;
    UnderlyingPaymentStreamPaymentDateOffsetUnit?: string;
    UnderlyingPaymentStreamPaymentDateOffsetDayType?: number;
    UnderlyingPaymentStreamMasterAgreementPaymentDatesIndicator?: boolean;
    UnderlyingPaymentStreamPaymentDateBusinessCenterGrp?: IUnderlyingPaymentStreamPaymentDateBusinessCenterGrp[];
    UnderlyingPaymentStreamPaymentDateGrp?: IUnderlyingPaymentStreamPaymentDateGrp[];
    UnderlyingPaymentStreamFinalPricePaymentDate?: IUnderlyingPaymentStreamFinalPricePaymentDate;
}
