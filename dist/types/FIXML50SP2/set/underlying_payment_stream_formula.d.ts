import { IUnderlyingPaymentStreamFormulaMathGrp } from './underlying_payment_stream_formula_math_grp';
import { IUnderlyingPaymentStreamFormulaImage } from './underlying_payment_stream_formula_image';
export interface IUnderlyingPaymentStreamFormula {
    UnderlyingPaymentStreamFormulaCurrency?: string;
    UnderlyingPaymentStreamFormulaCurrencyDeterminationMethod?: string;
    UnderlyingPaymentStreamFormulaReferenceAmount?: number;
    UnderlyingPaymentStreamFormulaMathGrp?: IUnderlyingPaymentStreamFormulaMathGrp;
    UnderlyingPaymentStreamFormulaImage?: IUnderlyingPaymentStreamFormulaImage;
}
