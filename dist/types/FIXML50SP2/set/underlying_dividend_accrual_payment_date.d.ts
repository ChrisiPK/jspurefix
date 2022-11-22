import { IUnderlyingDividendAccrualPaymentDateBusinessCenterGrp } from './underlying_dividend_accrual_payment_date_business_center_grp';
export interface IUnderlyingDividendAccrualPaymentDate {
    UnderlyingDividendAccrualPaymentDateRelativeTo?: number;
    UnderlyingDividendAccrualPaymentDateOffsetPeriod?: number;
    UnderlyingDividendAccrualPaymentDateOffsetUnit?: string;
    UnderlyingDividendAccrualPaymentDateOffsetDayType?: number;
    UnderlyingDividendAccrualPaymentDateUnadjusted?: Date;
    UnderlyingDividendAccrualPaymentDateBusinessDayConvention?: number;
    UnderlyingDividendAccrualPaymentDateAdjusted?: Date;
    UnderlyingDividendAccrualPaymentDateBusinessCenterGrp?: IUnderlyingDividendAccrualPaymentDateBusinessCenterGrp[];
}
