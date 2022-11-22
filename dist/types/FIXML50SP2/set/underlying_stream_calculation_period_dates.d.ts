import { IUnderlyingStreamCalculationPeriodBusinessCenterGrp } from './underlying_stream_calculation_period_business_center_grp';
import { IUnderlyingStreamCalculationPeriodDateGrp } from './underlying_stream_calculation_period_date_grp';
import { IUnderlyingStreamFirstPeriodStartDateBusinessCenterGrp } from './underlying_stream_first_period_start_date_business_center_grp';
export interface IUnderlyingStreamCalculationPeriodDates {
    UnderlyingStreamCalculationPeriodDatesXID?: string;
    UnderlyingStreamCalculationPeriodDatesXIDRef?: string;
    UnderlyingStreamCalculationPeriodBusinessDayConvention?: number;
    UnderlyingStreamFirstPeriodStartDateUnadjusted?: Date;
    UnderlyingStreamFirstPeriodStartDateBusinessDayConvention?: number;
    UnderlyingStreamFirstPeriodStartDateAdjusted?: Date;
    UnderlyingStreamFirstRegularPeriodStartDateUnadjusted?: Date;
    UnderlyingStreamFirstCompoundingPeriodEndDateUnadjusted?: Date;
    UnderlyingStreamLastRegularPeriodEndDateUnadjusted?: Date;
    UnderlyingStreamCalculationFrequencyPeriod?: number;
    UnderlyingStreamCalculationFrequencyUnit?: string;
    UnderlyingStreamCalculationRollConvention?: string;
    UnderlyingStreamCalculationBalanceOfFirstPeriod?: boolean;
    UnderlyingStreamCalculationCorrectionPeriod?: number;
    UnderlyingStreamCalculationCorrectionUnit?: string;
    UnderlyingStreamCalculationPeriodBusinessCenterGrp?: IUnderlyingStreamCalculationPeriodBusinessCenterGrp[];
    UnderlyingStreamCalculationPeriodDateGrp?: IUnderlyingStreamCalculationPeriodDateGrp[];
    UnderlyingStreamFirstPeriodStartDateBusinessCenterGrp?: IUnderlyingStreamFirstPeriodStartDateBusinessCenterGrp[];
}
