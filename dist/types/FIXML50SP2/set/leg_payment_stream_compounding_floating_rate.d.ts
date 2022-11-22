export interface ILegPaymentStreamCompoundingFloatingRate {
    LegPaymentStreamCompoundingRateIndex?: string;
    LegPaymentStreamCompoundingRateIndexCurvePeriod?: number;
    LegPaymentStreamCompoundingRateIndexCurveUnit?: string;
    LegPaymentStreamCompoundingRateMultiplier?: number;
    LegPaymentStreamCompoundingRateSpread?: number;
    LegPaymentStreamCompoundingRateSpreadPositionType?: number;
    LegPaymentStreamCompoundingRateTreatment?: number;
    LegPaymentStreamCompoundingCapRate?: number;
    LegPaymentStreamCompoundingCapRateBuySide?: number;
    LegPaymentStreamCompoundingCapRateSellSide?: number;
    LegPaymentStreamCompoundingFloorRate?: number;
    LegPaymentStreamCompoundingFloorRateBuySide?: number;
    LegPaymentStreamCompoundingFloorRateSellSide?: number;
    LegPaymentStreamCompoundingInitialRate?: number;
    LegPaymentStreamCompoundingFinalRateRoundingDirection?: string;
    LegPaymentStreamCompoundingFinalRatePrecision?: number;
    LegPaymentStreamCompoundingAveragingMethod?: number;
    LegPaymentStreamCompoundingNegativeRateTreatment?: number;
}
