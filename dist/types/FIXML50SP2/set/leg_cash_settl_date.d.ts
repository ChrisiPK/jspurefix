import { ILegCashSettlDateBusinessCenterGrp } from './leg_cash_settl_date_business_center_grp';
export interface ILegCashSettlDate {
    LegCashSettlDateUnadjusted?: Date;
    LegCashSettlDateBusinessDayConvention?: number;
    LegCashSettlDateRelativeTo?: number;
    LegCashSettlDateOffsetPeriod?: number;
    LegCashSettlDateOffsetUnit?: string;
    LegCashSettlDateOffsetDayType?: number;
    LegCashSettlDateAdjusted?: Date;
    LegCashSettlDateBusinessCenterGrp?: ILegCashSettlDateBusinessCenterGrp[];
}
