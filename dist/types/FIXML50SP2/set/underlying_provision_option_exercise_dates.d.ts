import { IUnderlyingProvisionOptionExerciseBusinessCenterGrp } from './underlying_provision_option_exercise_business_center_grp';
import { IUnderlyingProvisionOptionExerciseFixedDateGrp } from './underlying_provision_option_exercise_fixed_date_grp';
export interface IUnderlyingProvisionOptionExerciseDates {
    UnderlyingProvisionOptionExerciseBusinessDayConvention?: number;
    UnderlyingProvisionOptionExerciseEarliestDateOffsetPeriod?: number;
    UnderlyingProvisionOptionExerciseEarliestDateOffsetUnit?: string;
    UnderlyingProvisionOptionExerciseFrequencyPeriod?: number;
    UnderlyingProvisionOptionExerciseFrequencyUnit?: string;
    UnderlyingProvisionOptionExerciseStartDateUnadjusted?: Date;
    UnderlyingProvisionOptionExerciseStartDateRelativeTo?: number;
    UnderlyingProvisionOptionExerciseStartDateOffsetPeriod?: number;
    UnderlyingProvisionOptionExerciseStartDateOffsetUnit?: string;
    UnderlyingProvisionOptionExerciseStartDateOffsetDayType?: number;
    UnderlyingProvisionOptionExerciseStartDateAdjusted?: Date;
    UnderlyingProvisionOptionExercisePeriodSkip?: number;
    UnderlyingProvisionOptionExerciseBoundsFirstDateUnadjusted?: Date;
    UnderlyingProvisionOptionExerciseBoundsLastDateUnadjusted?: Date;
    UnderlyingProvisionOptionExerciseEarliestTime?: string;
    UnderlyingProvisionOptionExerciseEarliestTimeBusinessCenter?: string;
    UnderlyingProvisionOptionExerciseLatestTime?: string;
    UnderlyingProvisionOptionExerciseLatestTimeBusinessCenter?: string;
    UnderlyingProvisionOptionExerciseBusinessCenterGrp?: IUnderlyingProvisionOptionExerciseBusinessCenterGrp[];
    UnderlyingProvisionOptionExerciseFixedDateGrp?: IUnderlyingProvisionOptionExerciseFixedDateGrp[];
}
