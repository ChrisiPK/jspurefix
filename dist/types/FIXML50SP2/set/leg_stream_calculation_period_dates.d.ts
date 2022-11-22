import { ILegStreamCalculationPeriodBusinessCenterGrp } from './leg_stream_calculation_period_business_center_grp';
import { ILegStreamCalculationPeriodDateGrp } from './leg_stream_calculation_period_date_grp';
import { ILegStreamFirstPeriodStartDateBusinessCenterGrp } from './leg_stream_first_period_start_date_business_center_grp';
export interface ILegStreamCalculationPeriodDates {
    LegStreamCalculationPeriodDatesXID?: string;
    LegStreamCalculationPeriodDatesXIDRef?: string;
    LegStreamCalculationPeriodBusinessDayConvention?: number;
    LegStreamFirstPeriodStartDateUnadjusted?: Date;
    LegStreamFirstPeriodStartDateBusinessDayConvention?: number;
    LegStreamFirstPeriodStartDateAdjusted?: Date;
    LegStreamFirstRegularPeriodStartDateUnadjusted?: Date;
    LegStreamFirstCompoundingPeriodEndDateUnadjusted?: Date;
    LegStreamLastRegularPeriodEndDateUnadjusted?: Date;
    LegStreamCalculationFrequencyPeriod?: number;
    LegStreamCalculationFrequencyUnit?: string;
    LegStreamCalculationRollConvention?: string;
    LegStreamCalculationBalanceOfFirstPeriod?: boolean;
    LegStreamCalculationCorrectionPeriod?: number;
    LegStreamCalculationCorrectionUnit?: string;
    LegStreamCalculationPeriodBusinessCenterGrp?: ILegStreamCalculationPeriodBusinessCenterGrp[];
    LegStreamCalculationPeriodDateGrp?: ILegStreamCalculationPeriodDateGrp[];
    LegStreamFirstPeriodStartDateBusinessCenterGrp?: ILegStreamFirstPeriodStartDateBusinessCenterGrp[];
}
