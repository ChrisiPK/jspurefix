import { ILegDividendFXTriggerDateBusinessCenterGrp } from './leg_dividend_fx_trigger_date_business_center_grp';
export interface ILegDividendFXTriggerDate {
    LegDividendFXTriggerDateRelativeTo?: number;
    LegDividendFXTriggerDateOffsetPeriod?: number;
    LegDividendFXTriggerDateOffsetUnit?: string;
    LegDividendFXTriggerDateOffsetDayType?: number;
    LegDividendFXTriggerDateUnadjusted?: Date;
    LegDividendFXTriggerDateBusinessDayConvention?: number;
    LegDividendFXTriggerDateAdjusted?: Date;
    LegDividendFXTriggerDateBusinessCenterGrp?: ILegDividendFXTriggerDateBusinessCenterGrp[];
}
