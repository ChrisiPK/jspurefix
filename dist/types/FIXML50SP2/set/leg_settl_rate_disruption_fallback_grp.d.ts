import { ILegSettlRateFallbackRateSource } from './leg_settl_rate_fallback_rate_source';
export interface ILegSettlRateDisruptionFallbackGrp {
    LegSettlRatePostponementMaximumDays?: number;
    LegSettlRatePostponementSurvey?: boolean;
    LegSettlRatePostponementCalculationAgent?: number;
    LegSettlRateFallbackRateSource?: ILegSettlRateFallbackRateSource;
}
