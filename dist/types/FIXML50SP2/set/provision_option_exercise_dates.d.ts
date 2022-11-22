import { IProvisionOptionExerciseBusinessCenterGrp } from './provision_option_exercise_business_center_grp';
import { IProvisionOptionExerciseFixedDateGrp } from './provision_option_exercise_fixed_date_grp';
export interface IProvisionOptionExerciseDates {
    ProvisionOptionExerciseBusinessDayConvention?: number;
    ProvisionOptionExerciseEarliestDateOffsetPeriod?: number;
    ProvisionOptionExerciseEarliestDateOffsetUnit?: string;
    ProvisionOptionExerciseFrequencyPeriod?: number;
    ProvisionOptionExerciseFrequencyUnit?: string;
    ProvisionOptionExerciseStartDateUnadjusted?: Date;
    ProvisionOptionExerciseStartDateRelativeTo?: number;
    ProvisionOptionExerciseStartDateOffsetPeriod?: number;
    ProvisionOptionExerciseStartDateOffsetUnit?: string;
    ProvisionOptionExerciseStartDateOffsetDayType?: number;
    ProvisionOptionExerciseStartDateAdjusted?: Date;
    ProvisionOptionExercisePeriodSkip?: number;
    ProvisionOptionExerciseBoundsFirstDateUnadjusted?: Date;
    ProvisionOptionExerciseBoundsLastDateUnadjusted?: Date;
    ProvisionOptionExerciseEarliestTime?: string;
    ProvisionOptionExerciseEarliestTimeBusinessCenter?: string;
    ProvisionOptionExerciseLatestTime?: string;
    ProvisionOptionExerciseLatestTimeBusinessCenter?: string;
    ProvisionOptionExerciseBusinessCenterGrp?: IProvisionOptionExerciseBusinessCenterGrp[];
    ProvisionOptionExerciseFixedDateGrp?: IProvisionOptionExerciseFixedDateGrp[];
}
