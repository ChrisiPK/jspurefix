export interface IUnderlyingPaymentStreamCompoundingFloatingRate {
    UnderlyingPaymentStreamCompoundingRateIndex?: string;
    UnderlyingPaymentStreamCompoundingRateIndexCurvePeriod?: number;
    UnderlyingPaymentStreamCompoundingRateIndexCurveUnit?: string;
    UnderlyingPaymentStreamCompoundingRateMultiplier?: number;
    UnderlyingPaymentStreamCompoundingRateSpread?: number;
    UnderlyingPaymentStreamCompoundingRateSpreadPositionType?: number;
    UnderlyingPaymentStreamCompoundingRateTreatment?: number;
    UnderlyingPaymentStreamCompoundingCapRate?: number;
    UnderlyingPaymentStreamCompoundingCapRateBuySide?: number;
    UnderlyingPaymentStreamCompoundingCapRateSellSide?: number;
    UnderlyingPaymentStreamCompoundingFloorRate?: number;
    UnderlyingPaymentStreamCompoundingFloorRateBuySide?: number;
    UnderlyingPaymentStreamCompoundingFloorRateSellSide?: number;
    UnderlyingPaymentStreamCompoundingInitialRate?: number;
    UnderlyingPaymentStreamCompoundingFinalRateRoundingDirection?: string;
    UnderlyingPaymentStreamCompoundingFinalRatePrecision?: number;
    UnderlyingPaymentStreamCompoundingAveragingMethod?: number;
    UnderlyingPaymentStreamCompoundingNegativeRateTreatment?: number;
}
