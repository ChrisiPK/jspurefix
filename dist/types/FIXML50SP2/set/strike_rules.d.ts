import { IMaturityRules } from './maturity_rules';
export interface IStrikeRules {
    StrikeRuleID?: string;
    StartStrikePxRange?: number;
    EndStrikePxRange?: number;
    StrikeIncrement?: number;
    StrikeExerciseStyle?: number;
    MaturityRules?: IMaturityRules[];
}
