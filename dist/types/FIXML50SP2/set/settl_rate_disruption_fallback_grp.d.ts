import { ISettlRateFallbackRateSource } from './settl_rate_fallback_rate_source';
export interface ISettlRateDisruptionFallbackGrp {
    SettlRatePostponementMaximumDays?: number;
    SettlRatePostponementSurvey?: boolean;
    SettlRatePostponementCalculationAgent?: number;
    SettlRateFallbackRateSource?: ISettlRateFallbackRateSource;
}
