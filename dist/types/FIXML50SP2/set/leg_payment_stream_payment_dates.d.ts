import { ILegPaymentStreamPaymentDateBusinessCenterGrp } from './leg_payment_stream_payment_date_business_center_grp';
import { ILegPaymentStreamPaymentDateGrp } from './leg_payment_stream_payment_date_grp';
import { ILegPaymentStreamFinalPricePaymentDate } from './leg_payment_stream_final_price_payment_date';
export interface ILegPaymentStreamPaymentDates {
    LegPaymentStreamPaymentDateBusinessDayConvention?: number;
    LegPaymentStreamPaymentFrequencyPeriod?: number;
    LegPaymentStreamPaymentFrequencyUnit?: string;
    LegPaymentStreamPaymentRollConvention?: string;
    LegPaymentStreamFirstPaymentDateUnadjusted?: Date;
    LegPaymentStreamLastRegularPaymentDateUnadjusted?: Date;
    LegPaymentStreamPaymentDateRelativeTo?: number;
    LegPaymentStreamPaymentDateOffsetPeriod?: number;
    LegPaymentStreamPaymentDateOffsetUnit?: string;
    LegPaymentStreamPaymentDateOffsetDayType?: number;
    LegPaymentStreamMasterAgreementPaymentDatesIndicator?: boolean;
    LegPaymentStreamPaymentDateBusinessCenterGrp?: ILegPaymentStreamPaymentDateBusinessCenterGrp[];
    LegPaymentStreamPaymentDateGrp?: ILegPaymentStreamPaymentDateGrp[];
    LegPaymentStreamFinalPricePaymentDate?: ILegPaymentStreamFinalPricePaymentDate;
}
