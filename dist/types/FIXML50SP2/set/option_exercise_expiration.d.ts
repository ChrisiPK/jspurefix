import { IOptionExerciseExpirationDateBusinessCenterGrp } from './option_exercise_expiration_date_business_center_grp';
import { IOptionExerciseExpirationDateGrp } from './option_exercise_expiration_date_grp';
export interface IOptionExerciseExpiration {
    OptionExerciseExpirationDateBusinessDayConvention?: number;
    OptionExerciseExpirationDateRelativeTo?: number;
    OptionExerciseExpirationDateOffsetPeriod?: number;
    OptionExerciseExpirationDateOffsetUnit?: string;
    OptionExerciseExpirationFrequencyPeriod?: number;
    OptionExerciseExpirationFrequencyUnit?: string;
    OptionExerciseExpirationRollConvention?: string;
    OptionExerciseExpirationDateOffsetDayType?: number;
    OptionExerciseExpirationTime?: string;
    OptionExerciseExpirationTimeBusinessCenter?: string;
    OptionExerciseExpirationDateBusinessCenterGrp?: IOptionExerciseExpirationDateBusinessCenterGrp[];
    OptionExerciseExpirationDateGrp?: IOptionExerciseExpirationDateGrp[];
}
