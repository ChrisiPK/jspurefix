export interface IUnderlyingDividendAccrualFloatingRate {
    UnderlyingDividendFloatingRateIndex?: string;
    UnderlyingDividendFloatingRateIndexCurvePeriod?: number;
    UnderlyingDividendFloatingRateIndexCurveUnit?: string;
    UnderlyingDividendFloatingRateMultiplier?: number;
    UnderlyingDividendFloatingRateSpread?: number;
    UnderlyingDividendFloatingRateSpreadPositionType?: number;
    UnderlyingDividendFloatingRateTreatment?: number;
    UnderlyingDividendCapRate?: number;
    UnderlyingDividendCapRateBuySide?: number;
    UnderlyingDividendCapRateSellSide?: number;
    UnderlyingDividendFloorRate?: number;
    UnderlyingDividendFloorRateBuySide?: number;
    UnderlyingDividendFloorRateSellSide?: number;
    UnderlyingDividendInitialRate?: number;
    UnderlyingDividendFinalRateRoundingDirection?: string;
    UnderlyingDividendFinalRatePrecision?: number;
    UnderlyingDividendAveragingMethod?: number;
    UnderlyingDividendNegativeRateTreatment?: number;
}
