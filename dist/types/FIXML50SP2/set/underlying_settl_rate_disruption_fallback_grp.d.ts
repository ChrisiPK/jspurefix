import { IUnderlyingSettlRateFallbackRateSource } from './underlying_settl_rate_fallback_rate_source';
export interface IUnderlyingSettlRateDisruptionFallbackGrp {
    UnderlyingSettlRatePostponementMaximumDays?: number;
    UnderlyingSettlRatePostponementSurvey?: boolean;
    UnderlyingSettlRatePostponementCalculationAgent?: number;
    UnderlyingSettlRateFallbackRateSource?: IUnderlyingSettlRateFallbackRateSource;
}
