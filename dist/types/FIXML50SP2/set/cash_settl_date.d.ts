import { ICashSettlDateBusinessCenterGrp } from './cash_settl_date_business_center_grp';
export interface ICashSettlDate {
    CashSettlDateUnadjusted?: Date;
    CashSettlDateBusinessDayConvention?: number;
    CashSettlDateRelativeTo?: number;
    CashSettlDateOffsetPeriod?: number;
    CashSettlDateOffsetUnit?: string;
    CashSettlDateOffsetDayType?: number;
    CashSettlDateAdjusted?: Date;
    CashSettlDateBusinessCenterGrp?: ICashSettlDateBusinessCenterGrp[];
}
