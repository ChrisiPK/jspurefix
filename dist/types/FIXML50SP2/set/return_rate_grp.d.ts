import { IReturnRatePriceGrp } from './return_rate_price_grp';
import { IReturnRateFXConversionGrp } from './return_rate_fx_conversion_grp';
import { IReturnRateInformationSourceGrp } from './return_rate_information_source_grp';
import { IReturnRateDateGrp } from './return_rate_date_grp';
export interface IReturnRateGrp {
    ReturnRatePriceSequence?: number;
    ReturnRateCommissionBasis?: string;
    ReturnRateCommissionAmount?: number;
    ReturnRateCommissionCurrency?: string;
    ReturnRateTotalCommissionPerTrade?: number;
    ReturnRateDeterminationMethod?: string;
    ReturnRateAmountRelativeTo?: number;
    ReturnRateQuoteMeasureType?: string;
    ReturnRateQuoteUnits?: string;
    ReturnRateQuoteMethod?: number;
    ReturnRateQuoteCurrency?: string;
    ReturnRateQuoteCurrencyType?: string;
    ReturnRateQuoteTimeType?: number;
    ReturnRateQuoteTime?: string;
    ReturnRateQuoteDate?: Date;
    ReturnRateQuoteExpirationTime?: string;
    ReturnRateQuoteBusinessCenter?: string;
    ReturnRateQuoteExchange?: string;
    ReturnRateQuotePricingModel?: string;
    ReturnRateCashFlowType?: string;
    ReturnRateValuationTimeType?: number;
    ReturnRateValuationTime?: string;
    ReturnRateValuationTimeBusinessCenter?: string;
    ReturnRateValuationPriceOption?: number;
    ReturnRateFinalPriceFallback?: number;
    ReturnRatePriceGrp?: IReturnRatePriceGrp[];
    ReturnRateFXConversionGrp?: IReturnRateFXConversionGrp[];
    ReturnRateInformationSourceGrp?: IReturnRateInformationSourceGrp[];
    ReturnRateDateGrp?: IReturnRateDateGrp[];
}
