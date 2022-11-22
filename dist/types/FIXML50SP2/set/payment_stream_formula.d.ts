import { IPaymentStreamFormulaMathGrp } from './payment_stream_formula_math_grp';
import { IPaymentStreamFormulaImage } from './payment_stream_formula_image';
export interface IPaymentStreamFormula {
    PaymentStreamFormulaCurrency?: string;
    PaymentStreamFormulaCurrencyDeterminationMethod?: string;
    PaymentStreamFormulaReferenceAmount?: number;
    PaymentStreamFormulaMathGrp?: IPaymentStreamFormulaMathGrp;
    PaymentStreamFormulaImage?: IPaymentStreamFormulaImage;
}
