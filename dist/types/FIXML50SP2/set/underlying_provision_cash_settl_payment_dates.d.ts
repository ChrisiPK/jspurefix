import { IUnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp } from './underlying_provision_cash_settl_payment_date_business_center_grp';
import { IUnderlyingProvisionCashSettlPaymentFixedDateGrp } from './underlying_provision_cash_settl_payment_fixed_date_grp';
export interface IUnderlyingProvisionCashSettlPaymentDates {
    UnderlyingProvisionCashSettlPaymentDateBusinessDayConvention?: number;
    UnderlyingProvisionCashSettlPaymentDateRelativeTo?: number;
    UnderlyingProvisionCashSettlPaymentDateOffsetPeriod?: number;
    UnderlyingProvisionCashSettlPaymentDateOffsetUnit?: string;
    UnderlyingProvisionCashSettlPaymentDateOffsetDayType?: number;
    UnderlyingProvisionCashSettlPaymentDateRangeFirst?: Date;
    UnderlyingProvisionCashSettlPaymentDateRangeLast?: Date;
    UnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp?: IUnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp[];
    UnderlyingProvisionCashSettlPaymentFixedDateGrp?: IUnderlyingProvisionCashSettlPaymentFixedDateGrp[];
}
