import { IPaymentStreamPaymentDateBusinessCenterGrp } from './payment_stream_payment_date_business_center_grp';
import { IPaymentStreamPaymentDateGrp } from './payment_stream_payment_date_grp';
import { IPaymentStreamFinalPricePaymentDate } from './payment_stream_final_price_payment_date';
export interface IPaymentStreamPaymentDates {
    PaymentStreamPaymentDateBusinessDayConvention?: number;
    PaymentStreamPaymentFrequencyPeriod?: number;
    PaymentStreamPaymentFrequencyUnit?: string;
    PaymentStreamPaymentRollConvention?: string;
    PaymentStreamFirstPaymentDateUnadjusted?: Date;
    PaymentStreamLastRegularPaymentDateUnadjusted?: Date;
    PaymentStreamPaymentDateRelativeTo?: number;
    PaymentStreamPaymentDateOffsetPeriod?: number;
    PaymentStreamPaymentDateOffsetUnit?: string;
    PaymentStreamPaymentDateOffsetDayType?: number;
    PaymentStreamMasterAgreementPaymentDatesIndicator?: boolean;
    PaymentStreamPaymentDateBusinessCenterGrp?: IPaymentStreamPaymentDateBusinessCenterGrp[];
    PaymentStreamPaymentDateGrp?: IPaymentStreamPaymentDateGrp[];
    PaymentStreamFinalPricePaymentDate?: IPaymentStreamFinalPricePaymentDate;
}
