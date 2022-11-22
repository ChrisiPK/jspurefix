export interface IDividendAccrualFloatingRate {
    DividendFloatingRateIndex?: string;
    DividendFloatingRateIndexCurvePeriod?: number;
    DividendFloatingRateIndexCurveUnit?: string;
    DividendFloatingRateMultiplier?: number;
    DividendFloatingRateSpread?: number;
    DividendFloatingRateSpreadPositionType?: number;
    DividendFloatingRateTreatment?: number;
    DividendCapRate?: number;
    DividendCapRateBuySide?: number;
    DividendCapRateSellSide?: number;
    DividendFloorRate?: number;
    DividendFloorRateBuySide?: number;
    DividendFloorRateSellSide?: number;
    DividendInitialRate?: number;
    DividendFinalRateRoundingDirection?: string;
    DividendFinalRatePrecision?: number;
    DividendAveragingMethod?: number;
    DividendNegativeRateTreatment?: number;
}
