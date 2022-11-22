import { IPaymentSettlParties } from './payment_settl_parties';
export interface IPaymentSettlGrp {
    PaymentSettlAmount?: number;
    PaymentSettlCurrency?: string;
    PaymentSettlParties?: IPaymentSettlParties[];
}
