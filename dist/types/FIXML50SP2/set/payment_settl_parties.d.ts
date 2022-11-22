import { IPaymentSettlPtysSubGrp } from './payment_settl_ptys_sub_grp';
export interface IPaymentSettlParties {
    PaymentSettlPartyID?: string;
    PaymentSettlPartyIDSource?: string;
    PaymentSettlPartyRole?: number;
    PaymentSettlPartyRoleQualifier?: number;
    PaymentSettlPtysSubGrp?: IPaymentSettlPtysSubGrp[];
}
