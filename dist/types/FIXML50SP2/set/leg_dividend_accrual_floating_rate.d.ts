export interface ILegDividendAccrualFloatingRate {
    LegDividendFloatingRateIndex?: string;
    LegDividendFloatingRateIndexCurvePeriod?: number;
    LegDividendFloatingRateIndexCurveUnit?: string;
    LegDividendFloatingRateMultiplier?: number;
    LegDividendFloatingRateSpread?: number;
    LegDividendFloatingRateSpreadPositionType?: number;
    LegDividendFloatingRateTreatment?: number;
    LegDividendCapRate?: number;
    LegDividendCapRateBuySide?: number;
    LegDividendCapRateSellSide?: number;
    LegDividendFloorRate?: number;
    LegDividendFloorRateBuySide?: number;
    LegDividendFloorRateSellSide?: number;
    LegDividendInitialRate?: number;
    LegDividendFinalRateRoundingDirection?: string;
    LegDividendFinalRatePrecision?: number;
    LegDividendAveragingMethod?: number;
    LegDividendNegativeRateTreatment?: number;
}
