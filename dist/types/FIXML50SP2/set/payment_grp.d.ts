/// <reference types="node" />
import { IPaymentBusinessCenterGrp } from './payment_business_center_grp';
import { IPaymentSettlGrp } from './payment_settl_grp';
export interface IPaymentGrp {
    MiscFeeType?: string;
    PaymentSubType?: number;
    PaymentPaySide?: number;
    PaymentReceiveSide?: number;
    PaymentDesc?: string;
    PaymentCurrency?: string;
    PaymentAmount?: number;
    PaymentAmountRelativeTo?: number;
    PaymentAmountDeterminationMethod?: string;
    PaymentPrice?: number;
    PaymentPriceType?: number;
    PaymentUnitOfMeasure?: string;
    PaymentDateUnadjusted?: Date;
    PaymentBusinessDayConvention?: number;
    PaymentDateRelativeTo?: number;
    PaymentDateOffsetPeriod?: number;
    PaymentDateOffsetUnit?: string;
    PaymentDateOffsetDayType?: number;
    PaymentDateAdjusted?: Date;
    PaymentForwardStartType?: number;
    PaymentDiscountFactor?: number;
    PaymentPresentValueAmount?: number;
    PaymentPresentValueCurrency?: string;
    PaymentSettlStyle?: number;
    PaymentMethod?: number;
    PaymentLegRefID?: string;
    PaymentText?: string;
    EncodedPaymentTextLen?: number;
    EncodedPaymentText?: Buffer;
    PaymentBusinessCenterGrp?: IPaymentBusinessCenterGrp[];
    PaymentSettlGrp?: IPaymentSettlGrp[];
}
