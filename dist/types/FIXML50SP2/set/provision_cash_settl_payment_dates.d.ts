import { IProvisionCashSettlPaymentDateBusinessCenterGrp } from './provision_cash_settl_payment_date_business_center_grp';
import { IProvisionCashSettlPaymentFixedDateGrp } from './provision_cash_settl_payment_fixed_date_grp';
export interface IProvisionCashSettlPaymentDates {
    ProvisionCashSettlPaymentDateBusinessDayConvention?: number;
    ProvisionCashSettlPaymentDateRelativeTo?: number;
    ProvisionCashSettlPaymentDateOffsetPeriod?: number;
    ProvisionCashSettlPaymentDateOffsetUnit?: string;
    ProvisionCashSettlPaymentDateOffsetDayType?: number;
    ProvisionCashSettlPaymentDateRangeFirst?: Date;
    ProvisionCashSettlPaymentDateRangeLast?: Date;
    ProvisionCashSettlPaymentDateBusinessCenterGrp?: IProvisionCashSettlPaymentDateBusinessCenterGrp[];
    ProvisionCashSettlPaymentFixedDateGrp?: IProvisionCashSettlPaymentFixedDateGrp[];
}
