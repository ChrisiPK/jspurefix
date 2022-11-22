import { ILegPaymentStreamFormulaMathGrp } from './leg_payment_stream_formula_math_grp';
import { ILegPaymentStreamFormulaImage } from './leg_payment_stream_formula_image';
export interface ILegPaymentStreamFormula {
    LegPaymentStreamFormulaCurrency?: string;
    LegPaymentStreamFormulaCurrencyDeterminationMethod?: string;
    LegPaymentStreamFormulaReferenceAmount?: number;
    LegPaymentStreamFormulaMathGrp?: ILegPaymentStreamFormulaMathGrp;
    LegPaymentStreamFormulaImage?: ILegPaymentStreamFormulaImage;
}
