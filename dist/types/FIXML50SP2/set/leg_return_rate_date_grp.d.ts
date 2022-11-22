import { ILegReturnRateValuationDateGrp } from './leg_return_rate_valuation_date_grp';
import { ILegReturnRateValuationDateBusinessCenterGrp } from './leg_return_rate_valuation_date_business_center_grp';
export interface ILegReturnRateDateGrp {
    LegReturnRateDateMode?: number;
    LegReturnRateValuationDateRelativeTo?: number;
    LegReturnRateValuationDateOffsetPeriod?: number;
    LegReturnRateValuationDateOffsetUnit?: string;
    LegReturnRateValuationDateOffsetDayType?: number;
    LegReturnRateValuationStartDateUnadjusted?: Date;
    LegReturnRateValuationStartDateRelativeTo?: number;
    LegReturnRateValuationStartDateOffsetPeriod?: number;
    LegReturnRateValuationStartDateOffsetUnit?: string;
    LegReturnRateValuationStartDateOffsetDayType?: number;
    LegReturnRateValuationStartDateAdjusted?: Date;
    LegReturnRateValuationEndDateUnadjusted?: Date;
    LegReturnRateValuationEndDateRelativeTo?: number;
    LegReturnRateValuationEndDateOffsetPeriod?: number;
    LegReturnRateValuationEndDateOffsetUnit?: string;
    LegReturnRateValuationEndDateOffsetDayType?: number;
    LegReturnRateValuationEndDateAdjusted?: Date;
    LegReturnRateValuationFrequencyPeriod?: number;
    LegReturnRateValuationFrequencyUnit?: string;
    LegReturnRateValuationFrequencyRollConvention?: string;
    LegReturnRateValuationDateBusinessDayConvention?: number;
    LegReturnRateValuationDateGrp?: ILegReturnRateValuationDateGrp[];
    LegReturnRateValuationDateBusinessCenterGrp?: ILegReturnRateValuationDateBusinessCenterGrp[];
}
