import { IUnderlyingPaymentStreamPricingBusinessCenterGrp } from './underlying_payment_stream_pricing_business_center_grp';
import { IUnderlyingPaymentStreamPricingDayGrp } from './underlying_payment_stream_pricing_day_grp';
import { IUnderlyingPaymentStreamPricingDateGrp } from './underlying_payment_stream_pricing_date_grp';
import { IUnderlyingPaymentStreamFormula } from './underlying_payment_stream_formula';
import { IUnderlyingDividendConditions } from './underlying_dividend_conditions';
import { IUnderlyingReturnRateGrp } from './underlying_return_rate_grp';
export interface IUnderlyingPaymentStreamFloatingRate {
    UnderlyingPaymentStreamRateIndex?: string;
    UnderlyingPaymentStreamRateIndexSource?: number;
    UnderlyingPaymentStreamRateIndexCurveUnit?: string;
    UnderlyingPaymentStreamRateIndexCurvePeriod?: number;
    UnderlyingPaymentStreamRateIndex2CurveUnit?: string;
    UnderlyingPaymentStreamRateIndex2CurvePeriod?: number;
    UnderlyingPaymentStreamRateIndexLocation?: string;
    UnderlyingPaymentStreamRateIndexLevel?: number;
    UnderlyingPaymentStreamRateIndexUnitOfMeasure?: string;
    UnderlyingPaymentStreamSettlLevel?: number;
    UnderlyingPaymentStreamReferenceLevel?: number;
    UnderlyingPaymentStreamReferenceLevelUnitOfMeasure?: string;
    UnderlyingPaymentStreamReferenceLevelEqualsZeroIndicator?: boolean;
    UnderlyingPaymentStreamRateMultiplier?: number;
    UnderlyingPaymentStreamRateSpread?: number;
    UnderlyingPaymentStreamRateSpreadCurrency?: string;
    UnderlyingPaymentStreamRateSpreadUnitOfMeasure?: string;
    UnderlyingPaymentStreamRateConversionFactor?: number;
    UnderlyingPaymentStreamRateSpreadType?: number;
    UnderlyingPaymentStreamRateSpreadPositionType?: number;
    UnderlyingPaymentStreamRateTreatment?: number;
    UnderlyingPaymentStreamCapRate?: number;
    UnderlyingPaymentStreamCapRateBuySide?: number;
    UnderlyingPaymentStreamCapRateSellSide?: number;
    UnderlyingPaymentStreamFloorRate?: number;
    UnderlyingPaymentStreamFloorRateBuySide?: number;
    UnderlyingPaymentStreamFloorRateSellSide?: number;
    UnderlyingPaymentStreamInitialRate?: number;
    UnderlyingPaymentStreamLastResetRate?: number;
    UnderlyingPaymentStreamFinalRate?: number;
    UnderlyingPaymentStreamFinalRateRoundingDirection?: string;
    UnderlyingPaymentStreamFinalRatePrecision?: number;
    UnderlyingPaymentStreamAveragingMethod?: number;
    UnderlyingPaymentStreamNegativeRateTreatment?: number;
    UnderlyingPaymentStreamCalculationLagPeriod?: number;
    UnderlyingPaymentStreamCalculationLagUnit?: string;
    UnderlyingPaymentStreamFirstObservationDateUnadjusted?: Date;
    UnderlyingPaymentStreamFirstObservationDateRelativeTo?: number;
    UnderlyingPaymentStreamFirstObservationDateOffsetDayType?: number;
    UnderlyingPaymentStreamFirstObservationDateOffsetPeriod?: number;
    UnderlyingPaymentStreamFirstObservationDateOffsetUnit?: string;
    UnderlyingPaymentStreamFirstObservationDateAdjusted?: Date;
    UnderlyingPaymentStreamPricingDayType?: number;
    UnderlyingPaymentStreamPricingDayDistribution?: number;
    UnderlyingPaymentStreamPricingDayCount?: number;
    UnderlyingPaymentStreamPricingBusinessCalendar?: string;
    UnderlyingPaymentStreamPricingBusinessDayConvention?: number;
    UnderlyingPaymentStreamInflationLagPeriod?: number;
    UnderlyingPaymentStreamInflationLagUnit?: string;
    UnderlyingPaymentStreamInflationLagDayType?: number;
    UnderlyingPaymentStreamInflationInterpolationMethod?: number;
    UnderlyingPaymentStreamInflationIndexSource?: number;
    UnderlyingPaymentStreamInflationPublicationSource?: string;
    UnderlyingPaymentStreamInflationInitialIndexLevel?: number;
    UnderlyingPaymentStreamInflationFallbackBondApplicable?: boolean;
    UnderlyingPaymentStreamFRADiscounting?: number;
    UnderlyingPaymentStreamUnderlierRefID?: string;
    UnderlyingReturnRateNotionalReset?: boolean;
    UnderlyingPaymentStreamLinkInitialLevel?: number;
    UnderlyingPaymentStreamLinkClosingLevelIndicator?: boolean;
    UnderlyingPaymentStreamLinkExpiringLevelIndicator?: boolean;
    UnderlyingPaymentStreamLinkEstimatedTradingDays?: number;
    UnderlyingPaymentStreamLinkStrikePrice?: number;
    UnderlyingPaymentStreamLinkStrikePriceType?: number;
    UnderlyingPaymentStreamLinkMaximumBoundary?: number;
    UnderlyingPaymentStreamLinkMinimumBoundary?: number;
    UnderlyingPaymentStreamLinkNumberOfDataSeries?: number;
    UnderlyingPaymentStreamVarianceUnadjustedCap?: number;
    UnderlyingPaymentStreamRealizedVarianceMethod?: number;
    UnderlyingPaymentStreamDaysAdjustmentIndicator?: boolean;
    UnderlyingPaymentStreamNearestExchangeContractRefID?: string;
    UnderlyingPaymentStreamVegaNotionalAmount?: number;
    UnderlyingPaymentStreamPricingBusinessCenterGrp?: IUnderlyingPaymentStreamPricingBusinessCenterGrp[];
    UnderlyingPaymentStreamPricingDayGrp?: IUnderlyingPaymentStreamPricingDayGrp[];
    UnderlyingPaymentStreamPricingDateGrp?: IUnderlyingPaymentStreamPricingDateGrp[];
    UnderlyingPaymentStreamFormula?: IUnderlyingPaymentStreamFormula;
    UnderlyingDividendConditions?: IUnderlyingDividendConditions;
    UnderlyingReturnRateGrp?: IUnderlyingReturnRateGrp[];
}
