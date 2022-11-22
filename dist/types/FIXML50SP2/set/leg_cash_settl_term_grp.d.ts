import { ILegCashSettlDealerGrp } from './leg_cash_settl_dealer_grp';
import { ILegCashSettlDate } from './leg_cash_settl_date';
export interface ILegCashSettlTermGrp {
    LegCashSettlCurrency?: string;
    LegCasSettlValuationFirstBusinessDayOffset?: number;
    LegCashSettlValuationSubsequentBusinessDaysOffset?: number;
    LegCashSettlNumOfValuationDates?: number;
    LegCashSettlValuationTime?: string;
    LegCashSettlBusinessCenter?: string;
    LegCashSettlQuoteMethod?: number;
    LegCashSettlQuoteAmount?: number;
    LegCashSettlQuoteCurrency?: string;
    LegCashSettlMinimumQuoteAmount?: number;
    LegCashSettlMinimumQuoteCurrency?: string;
    LegCashSettlPriceSource?: string;
    LegCashSettlPriceDefault?: number;
    LegCashSettlBusinessDays?: number;
    LegCashSettlAmount?: number;
    LegCashSettlRecoveryFactor?: number;
    LegCashSettlFixedTermIndicator?: boolean;
    LegCashSettlAccruedInterestIndicator?: boolean;
    LegCashSettlValuationMethod?: number;
    LegCashSettlTermXID?: string;
    LegCashSettlDealerGrp?: ILegCashSettlDealerGrp[];
    LegCashSettlDate?: ILegCashSettlDate;
}
