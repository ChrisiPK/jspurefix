import { IOptionExerciseBusinessCenterGrp } from './option_exercise_business_center_grp';
import { IOptionExerciseDateGrp } from './option_exercise_date_grp';
export interface IOptionExerciseDates {
    OptionExerciseBusinessDayConvention?: number;
    OptionExerciseEarliestDateOffsetDayType?: number;
    OptionExerciseEarliestDateOffsetPeriod?: number;
    OptionExerciseEarliestDateOffsetUnit?: string;
    OptionExerciseFrequencyPeriod?: number;
    OptionExerciseFrequencyUnit?: string;
    OptionExerciseStartDateUnadjusted?: Date;
    OptionExerciseStartDateRelativeTo?: number;
    OptionExerciseStartDateOffsetPeriod?: number;
    OptionExerciseStartDateOffsetUnit?: string;
    OptionExerciseStartDateOffsetDayType?: number;
    OptionExerciseStartDateAdjusted?: Date;
    OptionExerciseSkip?: number;
    OptionExerciseNominationDeadline?: Date;
    OptionExerciseFirstDateUnadjusted?: Date;
    OptionExerciseLastDateUnadjusted?: Date;
    OptionExerciseEarliestTime?: string;
    OptionExerciseLatestTime?: string;
    OptionExerciseTimeBusinessCenter?: string;
    OptionExerciseBusinessCenterGrp?: IOptionExerciseBusinessCenterGrp[];
    OptionExerciseDateGrp?: IOptionExerciseDateGrp[];
}
