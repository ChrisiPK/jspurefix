import { IUnderlyingDividendPaymentGrp } from './underlying_dividend_payment_grp';
export interface IUnderlyingDividendPayout {
    UnderlyingDividendPayoutRatio?: number;
    UnderlyingDividendPayoutConditions?: string;
    UnderlyingDividendPaymentGrp?: IUnderlyingDividendPaymentGrp[];
}
