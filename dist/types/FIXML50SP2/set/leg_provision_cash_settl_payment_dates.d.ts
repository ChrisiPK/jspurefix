import { ILegProvisionCashSettlPaymentDateBusinessCenterGrp } from './leg_provision_cash_settl_payment_date_business_center_grp';
import { ILegProvisionCashSettlPaymentFixedDateGrp } from './leg_provision_cash_settl_payment_fixed_date_grp';
export interface ILegProvisionCashSettlPaymentDates {
    LegProvisionCashSettlPaymentDateBusinessDayConvention?: number;
    LegProvisionCashSettlPaymentDateRelativeTo?: number;
    LegProvisionCashSettlPaymentDateOffsetPeriod?: number;
    LegProvisionCashSettlPaymentDateOffsetUnit?: string;
    LegProvisionCashSettlPaymentDateOffsetDayType?: number;
    LegProvisionCashSettlPaymentDateRangeFirst?: Date;
    LegProvisionCashSettlPaymentDateRangeLast?: Date;
    LegProvisionCashSettlPaymentDateBusinessCenterGrp?: ILegProvisionCashSettlPaymentDateBusinessCenterGrp[];
    LegProvisionCashSettlPaymentFixedDateGrp?: ILegProvisionCashSettlPaymentFixedDateGrp[];
}
