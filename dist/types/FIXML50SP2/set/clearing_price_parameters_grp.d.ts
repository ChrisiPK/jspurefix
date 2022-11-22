export interface IClearingPriceParametersGrp {
    BusinessDayType?: number;
    ClearingPriceOffset?: number;
    VegaMultiplier?: number;
    AnnualTradingBusinessDays?: number;
    TotalTradingBusinessDays?: number;
    TradingBusinessDays?: number;
    StandardVariance?: number;
    RealizedVariance?: number;
    RelatedClosePrice?: number;
    RiskFreeRate?: number;
    OvernightInterestRate?: number;
    AccumulatedReturnModifiedVariationMargin?: number;
    DiscountFactor?: number;
    Volatility?: number;
    ClearingSettlPrice?: number;
    CalculationMethod?: number;
}
