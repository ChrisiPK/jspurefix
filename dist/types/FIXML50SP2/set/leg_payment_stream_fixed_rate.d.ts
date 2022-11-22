export interface ILegPaymentStreamFixedRate {
    LegPaymentStreamRate?: number;
    LegPaymentStreamFixedAmount?: number;
    LegPaymentStreamRateOrAmountCurrency?: string;
    LegPaymentStreamFixedAmountUnitOfMeasure?: string;
    LegPaymentStreamTotalFixedAmount?: number;
    LegPaymentStreamFutureValueNotional?: number;
    LegPaymentStreamFutureValueDateAdjusted?: Date;
    LegPaymentStreamWorldScaleRate?: number;
    LegPaymentStreamContractPrice?: number;
    LegPaymentStreamContractPriceCurrency?: string;
}
