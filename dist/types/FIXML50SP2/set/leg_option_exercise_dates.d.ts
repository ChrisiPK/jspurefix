import { ILegOptionExerciseBusinessCenterGrp } from './leg_option_exercise_business_center_grp';
import { ILegOptionExerciseDateGrp } from './leg_option_exercise_date_grp';
export interface ILegOptionExerciseDates {
    LegOptionExerciseBusinessDayConvention?: number;
    LegOptionExerciseEarliestDateOffsetDayType?: number;
    LegOptionExerciseEarliestDateOffsetPeriod?: number;
    LegOptionExerciseEarliestDateOffsetUnit?: string;
    LegOptionExerciseFrequencyPeriod?: number;
    LegOptionExerciseFrequencyUnit?: string;
    LegOptionExerciseStartDateUnadjusted?: Date;
    LegOptionExerciseStartDateRelativeTo?: number;
    LegOptionExerciseStartDateOffsetPeriod?: number;
    LegOptionExerciseStartDateOffsetUnit?: string;
    LegOptionExerciseStartDateOffsetDayType?: number;
    LegOptionExerciseStartDateAdjusted?: Date;
    LegOptionExerciseSkip?: number;
    LegOptionExerciseNominationDeadline?: Date;
    LegOptionExerciseFirstDateUnadjusted?: Date;
    LegOptionExerciseLastDateUnadjusted?: Date;
    LegOptionExerciseEarliestTime?: string;
    LegOptionExerciseLatestTime?: string;
    LegOptionExerciseTimeBusinessCenter?: string;
    LegOptionExerciseBusinessCenterGrp?: ILegOptionExerciseBusinessCenterGrp[];
    LegOptionExerciseDateGrp?: ILegOptionExerciseDateGrp[];
}
