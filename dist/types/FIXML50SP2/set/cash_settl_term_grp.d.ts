import { ICashSettlDealerGrp } from './cash_settl_dealer_grp';
import { ICashSettlDate } from './cash_settl_date';
export interface ICashSettlTermGrp {
    CashSettlCurrency?: string;
    CashSettlValuationFirstBusinessDayOffset?: number;
    CashSettlValuationSubsequentBusinessDaysOffset?: number;
    CashSettlNumOfValuationDates?: number;
    CashSettlValuationTime?: string;
    CashSettlBusinessCenter?: string;
    CashSettlQuoteMethod?: number;
    CashSettlQuoteAmount?: number;
    CashSettlQuoteCurrency?: string;
    CashSettlMinimumQuoteAmount?: number;
    CashSettlMinimumQuoteCurrency?: string;
    CashSettlPriceSource?: string;
    CashSettlPriceDefault?: number;
    CashSettlBusinessDays?: number;
    CashSettlAmount?: number;
    CashSettlRecoveryFactor?: number;
    CashSettlFixedTermIndicator?: boolean;
    CashSettlAccruedInterestIndicator?: boolean;
    CashSettlValuationMethod?: number;
    CashSettlTermXID?: string;
    CashSettlDealerGrp?: ICashSettlDealerGrp[];
    CashSettlDate?: ICashSettlDate;
}
