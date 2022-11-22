import { IUnderlyingInstrument } from './underlying_instrument';
export interface IPosUndInstrmtGrpNoUnderlyings {
    UnderlyingInstrument?: IUnderlyingInstrument;
    UnderlyingSettlPrice: number;
    UnderlyingSettlPriceType: number;
}
