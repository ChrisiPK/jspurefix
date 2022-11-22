import { IUnderlyingDividendFXTriggerDateBusinessCenterGrp } from './underlying_dividend_fx_trigger_date_business_center_grp';
export interface IUnderlyingDividendFXTriggerDate {
    UnderlyingDividendFXTriggerDateRelativeTo?: number;
    UnderlyingDividendFXTriggerDateOffsetPeriod?: number;
    UnderlyingDividendFXTriggerDateOffsetUnit?: string;
    UnderlyingDividendFXTriggerDateOffsetDayType?: number;
    UnderlyingDividendFXTriggerDateUnadjusted?: Date;
    UnderlyingDividendFXTriggerDateBusinessDayConvention?: number;
    UnderlyingDividendFXTriggerDateAdjusted?: Date;
    UnderlyingDividendFXTriggerDateBusinessCenterGrp?: IUnderlyingDividendFXTriggerDateBusinessCenterGrp[];
}
