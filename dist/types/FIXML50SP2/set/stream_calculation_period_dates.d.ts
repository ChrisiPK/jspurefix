import { IStreamCalculationPeriodBusinessCenterGrp } from './stream_calculation_period_business_center_grp';
import { IStreamCalculationPeriodDateGrp } from './stream_calculation_period_date_grp';
import { IStreamFirstPeriodStartDateBusinessCenterGrp } from './stream_first_period_start_date_business_center_grp';
export interface IStreamCalculationPeriodDates {
    StreamCalculationPeriodDatesXID?: string;
    StreamCalculationPeriodDatesXIDRef?: string;
    StreamCalculationPeriodBusinessDayConvention?: number;
    StreamFirstPeriodStartDateUnadjusted?: Date;
    StreamFirstPeriodStartDateBusinessDayConvention?: number;
    StreamFirstPeriodStartDateAdjusted?: Date;
    StreamFirstRegularPeriodStartDateUnadjusted?: Date;
    StreamFirstCompoundingPeriodEndDateUnadjusted?: Date;
    StreamLastRegularPeriodEndDateUnadjusted?: Date;
    StreamCalculationFrequencyPeriod?: number;
    StreamCalculationFrequencyUnit?: string;
    StreamCalculationRollConvention?: string;
    StreamCalculationBalanceOfFirstPeriod?: boolean;
    StreamCalculationCorrectionPeriod?: number;
    StreamCalculationCorrectionUnit?: string;
    StreamCalculationPeriodBusinessCenterGrp?: IStreamCalculationPeriodBusinessCenterGrp[];
    StreamCalculationPeriodDateGrp?: IStreamCalculationPeriodDateGrp[];
    StreamFirstPeriodStartDateBusinessCenterGrp?: IStreamFirstPeriodStartDateBusinessCenterGrp[];
}
