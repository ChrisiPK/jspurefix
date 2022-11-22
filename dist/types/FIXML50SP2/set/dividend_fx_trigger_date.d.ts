import { IDividendFXTriggerDateBusinessCenterGrp } from './dividend_fx_trigger_date_business_center_grp';
export interface IDividendFXTriggerDate {
    DividendFXTriggerDateRelativeTo?: number;
    DividendFXTriggerDateOffsetPeriod?: number;
    DividendFXTriggerDateOffsetUnit?: string;
    DividendFXTriggerDateOffsetDayType?: number;
    DividendFXTriggerDateUnadjusted?: Date;
    DividendFXTriggerDateBusinessDayConvention?: number;
    DividendFXTriggerDateAdjusted?: Date;
    DividendFXTriggerDateBusinessCenterGrp?: IDividendFXTriggerDateBusinessCenterGrp[];
}
