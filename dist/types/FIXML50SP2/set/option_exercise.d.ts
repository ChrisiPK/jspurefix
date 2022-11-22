/// <reference types="node" />
import { ISettlMethodElectionDate } from './settl_method_election_date';
import { IOptionExerciseDates } from './option_exercise_dates';
import { IOptionExerciseExpiration } from './option_exercise_expiration';
import { IOptionExerciseMakeWholeProvision } from './option_exercise_make_whole_provision';
export interface IOptionExercise {
    ExerciseDesc?: string;
    EncodedExerciseDescLen?: number;
    EncodedExerciseDesc?: Buffer;
    AutomaticExerciseIndicator?: boolean;
    AutomaticExerciseThresholdRate?: number;
    ExerciseConfirmationMethod?: number;
    ManualNoticeBusinessCenter?: string;
    FallbackExerciseIndicator?: boolean;
    LimitedRightToConfirmIndicator?: boolean;
    ExerciseSplitTicketIndicator?: boolean;
    SettlMethodElectingPartySide?: number;
    SettlMethodElectionDate?: ISettlMethodElectionDate;
    OptionExerciseDates?: IOptionExerciseDates;
    OptionExerciseExpiration?: IOptionExerciseExpiration;
    OptionExerciseMakeWholeProvision?: IOptionExerciseMakeWholeProvision;
}
