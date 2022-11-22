export interface IUnderlyingPaymentStreamFixedRate {
    UnderlyingPaymentStreamRate?: number;
    UnderlyingPaymentStreamFixedAmount?: number;
    UnderlyingPaymentStreamRateOrAmountCurrency?: string;
    UnderlyingPaymentStreamFixedAmountUnitOfMeasure?: string;
    UnderlyingPaymentStreamTotalFixedAmount?: number;
    UnderlyingPaymentStreamFutureValueNotional?: number;
    UnderlyingPaymentStreamFutureValueDateAdjusted?: Date;
    UnderlyingPaymentStreamWorldScaleRate?: number;
    UnderlyingPaymentStreamContractPrice?: number;
    UnderlyingPaymentStreamContractPriceCurrency?: string;
}
