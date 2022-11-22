/// <reference types="node" />
import { IUnderlyingSettlMethodElectionDate } from './underlying_settl_method_election_date';
import { IUnderlyingOptionExerciseDates } from './underlying_option_exercise_dates';
import { IUnderlyingOptionExerciseExpiration } from './underlying_option_exercise_expiration';
import { IUnderlyingOptionExerciseMakeWholeProvision } from './underlying_option_exercise_make_whole_provision';
export interface IUnderlyingOptionExercise {
    UnderlyingExerciseDesc?: string;
    EncodedUnderlyingExerciseDescLen?: number;
    EncodedUnderlyingExerciseDesc?: Buffer;
    UnderlyingAutomaticExerciseIndicator?: boolean;
    UnderlyingAutomaticExerciseThresholdRate?: number;
    UnderlyingExerciseConfirmationMethod?: number;
    UnderlyingManualNoticeBusinessCenter?: string;
    UnderlyingFallbackExerciseIndicator?: boolean;
    UnderlyingLimitedRightToConfirmIndicator?: boolean;
    UnderlyingExerciseSplitTicketIndicator?: boolean;
    UnderlyingSettlMethodElectingPartySide?: number;
    UnderlyingSettlMethodElectionDate?: IUnderlyingSettlMethodElectionDate;
    UnderlyingOptionExerciseDates?: IUnderlyingOptionExerciseDates;
    UnderlyingOptionExerciseExpiration?: IUnderlyingOptionExerciseExpiration;
    UnderlyingOptionExerciseMakeWholeProvision?: IUnderlyingOptionExerciseMakeWholeProvision;
}
