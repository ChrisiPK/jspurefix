import { ILegOptionExerciseExpirationDateBusinessCenterGrp } from './leg_option_exercise_expiration_date_business_center_grp';
import { ILegOptionExerciseExpirationDateGrp } from './leg_option_exercise_expiration_date_grp';
export interface ILegOptionExerciseExpiration {
    LegOptionExerciseExpirationDateBusinessDayConvention?: number;
    LegOptionExerciseExpirationDateRelativeTo?: number;
    LegOptionExerciseExpirationDateOffsetPeriod?: number;
    LegOptionExerciseExpirationDateOffsetUnit?: string;
    LegOptionExerciseExpirationFrequencyPeriod?: number;
    LegOptionExerciseExpirationFrequencyUnit?: string;
    LegOptionExerciseExpirationRollConvention?: string;
    LegOptionExerciseExpirationDateOffsetDayType?: number;
    LegOptionExerciseExpirationTime?: string;
    LegOptionExerciseExpirationTimeBusinessCenter?: string;
    LegOptionExerciseExpirationDateBusinessCenterGrp?: ILegOptionExerciseExpirationDateBusinessCenterGrp[];
    LegOptionExerciseExpirationDateGrp?: ILegOptionExerciseExpirationDateGrp[];
}
