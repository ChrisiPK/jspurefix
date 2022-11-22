import { IUnderlyingProvisionCashSettlValueDateBusinessCenterGrp } from './underlying_provision_cash_settl_value_date_business_center_grp';
export interface IUnderlyingProvisionCashSettlValueDates {
    UnderlyingProvisionCashSettlValueTime?: string;
    UnderlyingProvisionCashSettlValueTimeBusinessCenter?: string;
    UnderlyingProvisionCashSettlValueDateBusinessDayConvention?: number;
    UnderlyingProvisionCashSettlValueDateRelativeTo?: number;
    UnderlyingProvisionCashSettlValueDateOffsetPeriod?: number;
    UnderlyingProvisionCashSettlValueDateOffsetUnit?: string;
    UnderlyingProvisionCashSettlValueDateOffsetDayType?: number;
    UnderlyingProvisionCashSettlValueDateAdjusted?: Date;
    UnderlyingProvisionCashSettlValueDateBusinessCenterGrp?: IUnderlyingProvisionCashSettlValueDateBusinessCenterGrp[];
}
