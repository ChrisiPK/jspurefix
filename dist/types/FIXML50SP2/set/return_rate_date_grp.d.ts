import { IReturnRateValuationDateGrp } from './return_rate_valuation_date_grp';
import { IReturnRateValuationDateBusinessCenterGrp } from './return_rate_valuation_date_business_center_grp';
export interface IReturnRateDateGrp {
    ReturnRateDateMode?: number;
    ReturnRateValuationDateRelativeTo?: number;
    ReturnRateValuationDateOffsetPeriod?: number;
    ReturnRateValuationDateOffsetUnit?: string;
    ReturnRateValuationDateOffsetDayType?: number;
    ReturnRateValuationStartDateUnadjusted?: Date;
    ReturnRateValuationStartDateRelativeTo?: number;
    ReturnRateValuationStartDateOffsetPeriod?: number;
    ReturnRateValuationStartDateOffsetUnit?: string;
    ReturnRateValuationStartDateOffsetDayType?: number;
    ReturnRateValuationStartDateAdjusted?: Date;
    ReturnRateValuationEndDateUnadjusted?: Date;
    ReturnRateValuationEndDateRelativeTo?: number;
    ReturnRateValuationEndDateOffsetPeriod?: number;
    ReturnRateValuationEndDateOffsetUnit?: string;
    ReturnRateValuationEndDateOffsetDayType?: number;
    ReturnRateValuationEndDateAdjusted?: Date;
    ReturnRateValuationFrequencyPeriod?: number;
    ReturnRateValuationFrequencyUnit?: string;
    ReturnRateValuationFrequencyRollConvention?: string;
    ReturnRateValuationDateBusinessDayConvention?: number;
    ReturnRateValuationDateGrp?: IReturnRateValuationDateGrp[];
    ReturnRateValuationDateBusinessCenterGrp?: IReturnRateValuationDateBusinessCenterGrp[];
}
