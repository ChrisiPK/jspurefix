import { IUnderlyingInstrument } from './underlying_instrument';
export interface IPosUndInstrmtGrp {
    UnderlyingInstrument?: IUnderlyingInstrument;
    UnderlyingSettlPrice: number;
    UnderlyingSettlPriceType: number;
}
