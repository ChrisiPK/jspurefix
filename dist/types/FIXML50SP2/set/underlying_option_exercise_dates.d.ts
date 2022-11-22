import { IUnderlyingOptionExerciseBusinessCenterGrp } from './underlying_option_exercise_business_center_grp';
import { IUnderlyingOptionExerciseDateGrp } from './underlying_option_exercise_date_grp';
export interface IUnderlyingOptionExerciseDates {
    UnderlyingOptionExerciseBusinessDayConvention?: number;
    UnderlyingOptionExerciseEarliestDateOffsetDayType?: number;
    UnderlyingOptionExerciseEarliestDateOffsetPeriod?: number;
    UnderlyingOptionExerciseEarliestDateOffsetUnit?: string;
    UnderlyingOptionExerciseFrequencyPeriod?: number;
    UnderlyingOptionExerciseFrequencyUnit?: string;
    UnderlyingOptionExerciseStartDateUnadjusted?: Date;
    UnderlyingOptionExerciseStartDateRelativeTo?: number;
    UnderlyingOptionExerciseStartDateOffsetPeriod?: number;
    UnderlyingOptionExerciseStartDateOffsetUnit?: string;
    UnderlyingOptionExerciseStartDateOffsetDayType?: number;
    UnderlyingOptionExerciseStartDateAdjusted?: Date;
    UnderlyingOptionExerciseSkip?: number;
    UnderlyingOptionExerciseNominationDeadline?: Date;
    UnderlyingOptionExerciseFirstDateUnadjusted?: Date;
    UnderlyingOptionExerciseLastDateUnadjusted?: Date;
    UnderlyingOptionExerciseEarliestTime?: string;
    UnderlyingOptionExerciseLatestTime?: string;
    UnderlyingOptionExerciseTimeBusinessCenter?: string;
    UnderlyingOptionExerciseBusinessCenterGrp?: IUnderlyingOptionExerciseBusinessCenterGrp[];
    UnderlyingOptionExerciseDateGrp?: IUnderlyingOptionExerciseDateGrp[];
}
