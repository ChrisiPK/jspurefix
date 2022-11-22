import { IUnderlyingCashSettlDateBusinessCenterGrp } from './underlying_cash_settl_date_business_center_grp';
export interface IUnderlyingCashSettlDate {
    UnderlyingCashSettlDateUnadjusted?: Date;
    UnderlyingCashSettlDateBusinessDayConvention?: number;
    UnderlyingCashSettlDateRelativeTo?: number;
    UnderlyingCashSettlDateOffsetPeriod?: number;
    UnderlyingCashSettlDateOffsetUnit?: string;
    UnderlyingCashSettlDateOffsetDayType?: number;
    UnderlyingCashSettlDateAdjusted?: Date;
    UnderlyingCashSettlDateBusinessCenterGrp?: IUnderlyingCashSettlDateBusinessCenterGrp[];
}
