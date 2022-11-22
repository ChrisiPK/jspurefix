import { ILegDividendAccrualPaymentDateBusinessCenterGrp } from './leg_dividend_accrual_payment_date_business_center_grp';
export interface ILegDividendAccrualPaymentDate {
    LegDividendAccrualPaymentDateRelativeTo?: number;
    LegDividendAccrualPaymentDateOffsetPeriod?: number;
    LegDividendAccrualPaymentDateOffsetUnit?: string;
    LegDividendAccrualPaymentDateOffsetDayType?: number;
    LegDividendAccrualPaymentDateUnadjusted?: Date;
    LegDividendAccrualPaymentDateBusinessDayConvention?: number;
    LegDividendAccrualPaymentDateAdjusted?: Date;
    LegDividendAccrualPaymentDateBusinessCenterGrp?: ILegDividendAccrualPaymentDateBusinessCenterGrp[];
}
