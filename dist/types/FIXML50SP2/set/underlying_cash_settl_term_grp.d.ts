import { IUnderlyingCashSettlDealerGrp } from './underlying_cash_settl_dealer_grp';
import { IUnderlyingCashSettlDate } from './underlying_cash_settl_date';
export interface IUnderlyingCashSettlTermGrp {
    UnderlyingCashSettlCurrency?: string;
    UnderlyingCashSettlValuationFirstBusinessDayOffset?: number;
    UnderlyingCashSettlValuationSubsequentBusinessDaysOffset?: number;
    UnderlyingCashSettlNumOfValuationDates?: number;
    UnderlyingCashSettlValuationTime?: string;
    UnderlyingCashSettlBusinessCenter?: string;
    UnderlyingCashSettlQuoteMethod?: number;
    UnderlyingCashSettlQuoteAmount?: number;
    UnderlyingCashSettlQuoteCurrency?: string;
    UnderlyingCashSettlMinimumQuoteAmount?: number;
    UnderlyingCashSettlMinimumQuoteCurrency?: string;
    UnderlyingCashSettlPriceSource?: string;
    UnderlyingCashSettlPriceDefault?: number;
    UnderlyingCashSettlBusinessDays?: number;
    UnderlyingCashSettlAmount?: number;
    UnderlyingCashSettlRecoveryFactor?: number;
    UnderlyingCashSettlFixedTermIndicator?: boolean;
    UnderlyingCashSettlAccruedInterestIndicator?: boolean;
    UnderlyingCashSettlValuationMethod?: number;
    UnderlyingCashSettlTermXID?: string;
    UnderlyingCashSettlDealerGrp?: IUnderlyingCashSettlDealerGrp[];
    UnderlyingCashSettlDate?: IUnderlyingCashSettlDate;
}
