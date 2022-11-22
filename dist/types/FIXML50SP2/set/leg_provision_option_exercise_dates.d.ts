import { ILegProvisionOptionExerciseBusinessCenterGrp } from './leg_provision_option_exercise_business_center_grp';
import { ILegProvisionOptionExerciseFixedDateGrp } from './leg_provision_option_exercise_fixed_date_grp';
export interface ILegProvisionOptionExerciseDates {
    LegProvisionOptionExerciseBusinessDayConvention?: number;
    LegProvisionOptionExerciseEarliestDateOffsetPeriod?: number;
    LegProvisionOptionExerciseEarliestDateOffsetUnit?: string;
    LegProvisionOptionExerciseFrequencyPeriod?: number;
    LegProvisionOptionExerciseFrequencyUnit?: string;
    LegProvisionOptionExerciseStartDateUnadjusted?: Date;
    LegProvisionOptionExerciseStartDateRelativeTo?: number;
    LegProvisionOptionExerciseStartDateOffsetPeriod?: number;
    LegProvisionOptionExerciseStartDateOffsetUnit?: string;
    LegProvisionOptionExerciseStartDateOffsetDayType?: number;
    LegProvisionOptionExerciseStartDateAdjusted?: Date;
    LegProvisionOptionExercisePeriodSkip?: number;
    LegProvisionOptionExerciseBoundsFirstDateUnadjusted?: Date;
    LegProvisionOptionExerciseBoundsLastDateUnadjusted?: Date;
    LegProvisionOptionExerciseEarliestTime?: string;
    LegProvisionOptionExerciseEarliestTimeBusinessCenter?: string;
    LegProvisionOptionExerciseLatestTime?: string;
    LegProvisionOptionExerciseLatestTimeBusinessCenter?: string;
    LegProvisionOptionExerciseBusinessCenterGrp?: ILegProvisionOptionExerciseBusinessCenterGrp[];
    LegProvisionOptionExerciseFixedDateGrp?: ILegProvisionOptionExerciseFixedDateGrp[];
}
