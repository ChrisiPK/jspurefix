/// <reference types="node" />
import { ILegSettlMethodElectionDate } from './leg_settl_method_election_date';
import { ILegOptionExerciseDates } from './leg_option_exercise_dates';
import { ILegOptionExerciseExpiration } from './leg_option_exercise_expiration';
import { ILegOptionExerciseMakeWholeProvision } from './leg_option_exercise_make_whole_provision';
export interface ILegOptionExercise {
    LegExerciseDesc?: string;
    EncodedLegExerciseDescLen?: number;
    EncodedLegExerciseDesc?: Buffer;
    LegAutomaticExerciseIndicator?: boolean;
    LegAutomaticExerciseThresholdRate?: number;
    LegExerciseConfirmationMethod?: number;
    LegManualNoticeBusinessCenter?: string;
    LegFallbackExerciseIndicator?: boolean;
    LegLimitRightToConfirmIndicator?: boolean;
    LegExerciseSplitTicketIndicator?: boolean;
    LegSettlMethodElectingPartySide?: number;
    LegSettlMethodElectionDate?: ILegSettlMethodElectionDate;
    LegOptionExerciseDates?: ILegOptionExerciseDates;
    LegOptionExerciseExpiration?: ILegOptionExerciseExpiration;
    LegOptionExerciseMakeWholeProvision?: ILegOptionExerciseMakeWholeProvision;
}
