import { IDividendAccrualPaymentDateBusinessCenterGrp } from './dividend_accrual_payment_date_business_center_grp';
export interface IDividendAccrualPaymentDate {
    DividendAccrualPaymentDateRelativeTo?: number;
    DividendAccrualPaymentDateOffsetPeriod?: number;
    DividendAccrualPaymentDateOffsetUnit?: string;
    DividendAccrualPaymentDateOffsetDayType?: number;
    DividendAccrualPaymentDateUnadjusted?: Date;
    DividendAccrualPaymeentDateBusinessDayConvention?: number;
    DividendAccrualPaymentDateAdjusted?: Date;
    DividendAccrualPaymentDateBusinessCenterGrp?: IDividendAccrualPaymentDateBusinessCenterGrp[];
}
