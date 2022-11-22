import { ILegProvisionCashSettlValueDateBusinessCenterGrp } from './leg_provision_cash_settl_value_date_business_center_grp';
export interface ILegProvisionCashSettlValueDates {
    LegProvisionCashSettlValueTime?: string;
    LegProvisionCashSettlValueTimeBusinessCenter?: string;
    LegProvisionCashSettlValueDateBusinessDayConvention?: number;
    LegProvisionCashSettlValueDateRelativeTo?: number;
    LegProvisionCashSettlValueDateOffsetPeriod?: number;
    LegProvisionCashSettlValueDateOffsetUnit?: string;
    LegProvisionCashSettlValueDateOffsetDayType?: number;
    LegProvisionCashSettlValueDateAdjusted?: Date;
    LegProvisionCashSettlValueDateBusinessCenterGrp?: ILegProvisionCashSettlValueDateBusinessCenterGrp[];
}
