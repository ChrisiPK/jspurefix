export interface IPaymentStreamFixedRate {
    PaymentStreamRate?: number;
    PaymentStreamFixedAmount?: number;
    PaymentStreamRateOrAmountCurrency?: string;
    PaymentStreamFixedAmountUnitOfMeasure?: string;
    PaymentStreamTotalFixedAmount?: number;
    PaymentStreamFutureValueNotional?: number;
    PaymentStreamFutureValueDateAdjusted?: Date;
    PaymentStreamWorldScaleRate?: number;
    PaymentStreamContractPrice?: number;
    PaymentStreamContractPriceCurrency?: string;
}
