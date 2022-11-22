export interface IPaymentStreamCompoundingFloatingRate {
    PaymentStreamCompoundingRateIndex?: string;
    PaymentStreamCompoundingRateIndexCurvePeriod?: number;
    PaymentStreamCompoundingRateIndexCurveUnit?: string;
    PaymentStreamCompoundingRateMultiplier?: number;
    PaymentStreamCompoundingRateSpread?: number;
    PaymentStreamCompoundingRateSpreadPositionType?: number;
    PaymentStreamCompoundingRateTreatment?: number;
    PaymentStreamCompoundingCapRate?: number;
    PaymentStreamCompoundingCapRateBuySide?: number;
    PaymentStreamCompoundingCapRateSellSide?: number;
    PaymentStreamCompoundingFloorRate?: number;
    PaymentStreamCompoundingFloorRateBuySide?: number;
    PaymentStreamCompoundingFloorRateSellSide?: number;
    PaymentStreamCompoundingInitialRate?: number;
    PaymentStreamCompoundingFinalRateRoundingDirection?: string;
    PaymentStreamCompoundingFinalRatePrecision?: number;
    PaymentStreamCompoundingAveragingMethod?: number;
    PaymentStreamCompoundingNegativeRateTreatment?: number;
}
