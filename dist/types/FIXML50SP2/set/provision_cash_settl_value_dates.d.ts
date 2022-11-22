import { IProvisionCashSettlValueDateBusinessCenterGrp } from './provision_cash_settl_value_date_business_center_grp';
export interface IProvisionCashSettlValueDates {
    ProvisionCashSettlValueTime?: string;
    ProvisionCashSettlValueTimeBusinessCenter?: string;
    ProvisionCashSettlValueDateBusinessDayConvention?: number;
    ProvisionCashSettlValueDateRelativeTo?: number;
    ProvisionCashSettlValueDateOffsetPeriod?: number;
    ProvisionCashSettlValueDateOffsetUnit?: string;
    ProvisionCashSettlValueDateOffsetDayType?: number;
    ProvisionCashSettlValueDateAdjusted?: Date;
    ProvisionCashSettlValueDateBusinessCenterGrp?: IProvisionCashSettlValueDateBusinessCenterGrp[];
}
