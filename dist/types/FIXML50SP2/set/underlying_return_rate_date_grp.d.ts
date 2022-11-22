import { IUnderlyingReturnRateValuationDateGrp } from './underlying_return_rate_valuation_date_grp';
import { IUnderlyingReturnRateValuationDateBusinessCenterGrp } from './underlying_return_rate_valuation_date_business_center_grp';
export interface IUnderlyingReturnRateDateGrp {
    UnderlyingReturnRateDateMode?: number;
    UnderlyingReturnRateValuationDateRelativeTo?: number;
    UnderlyingReturnRateValuationDateOffsetPeriod?: number;
    UnderlyingReturnRateValuationDateOffsetUnit?: string;
    UnderlyingReturnRateValuationDateOffsetDayType?: number;
    UnderlyingReturnRateValuationStartDateUnadjusted?: Date;
    UnderlyingReturnRateValuationStartDateRelativeTo?: number;
    UnderlyingReturnRateValuationStartDateOffsetPeriod?: number;
    UnderlyingReturnRateValuationStartDateOffsetUnit?: string;
    UnderlyingReturnRateValuationStartDateOffsetDayType?: number;
    UnderlyingReturnRateValuationStartDateAdjusted?: Date;
    UnderlyingReturnRateValuationEndDateUnadjusted?: Date;
    UnderlyingReturnRateValuationEndDateRelativeTo?: number;
    UnderlyingReturnRateValuationEndDateOffsetPeriod?: number;
    UnderlyingReturnRateValuationEndDateOffsetUnit?: string;
    UnderlyingReturnRateValuationEndDateOffsetDayType?: number;
    UnderlyingReturnRateValuationEndDateAdjusted?: Date;
    UnderlyingReturnRateValuationFrequencyPeriod?: number;
    UnderlyingReturnRateValuationFrequencyUnit?: string;
    UnderlyingReturnRateValuationFrequencyRollConvention?: string;
    UnderlyingReturnRateValuationDateBusinessDayConvention?: number;
    UnderlyingReturnRateValuationDateGrp?: IUnderlyingReturnRateValuationDateGrp[];
    UnderlyingReturnRateValuationDateBusinessCenterGrp?: IUnderlyingReturnRateValuationDateBusinessCenterGrp[];
}
