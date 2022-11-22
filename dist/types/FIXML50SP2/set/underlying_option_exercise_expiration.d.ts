import { IUnderlyingOptionExerciseExpirationDateBusinessCenterGrp } from './underlying_option_exercise_expiration_date_business_center_grp';
import { IUnderlyingOptionExerciseExpirationDateGrp } from './underlying_option_exercise_expiration_date_grp';
export interface IUnderlyingOptionExerciseExpiration {
    UnderlyingOptionExerciseExpirationDateBusinessDayConvention?: number;
    UnderlyingOptionExerciseExpirationDateRelativeTo?: number;
    UnderlyingOptionExerciseExpirationDateOffsetPeriod?: number;
    UnderlyingOptionExerciseExpirationDateOffsetUnit?: string;
    UnderlyingOptionExerciseExpirationFrequencyPeriod?: number;
    UnderlyingOptionExerciseExpirationFrequencyUnit?: string;
    UnderlyingOptionExerciseExpirationRollConvention?: string;
    UnderlyingOptionExerciseExpirationDateOffsetDayType?: number;
    UnderlyingOptionExerciseExpirationTime?: string;
    UnderlyingOptionExerciseExpirationTimeBusinessCenter?: string;
    UnderlyingOptionExerciseExpirationDateBusinessCenterGrp?: IUnderlyingOptionExerciseExpirationDateBusinessCenterGrp[];
    UnderlyingOptionExerciseExpirationDateGrp?: IUnderlyingOptionExerciseExpirationDateGrp[];
}
