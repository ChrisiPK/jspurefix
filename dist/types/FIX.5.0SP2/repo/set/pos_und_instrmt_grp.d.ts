import { IUnderlyingInstrument } from './underlying_instrument';
import { IUnderlyingAmount } from './underlying_amount';
export interface IPosUndInstrmtGrp {
    UnderlyingInstrument?: IUnderlyingInstrument;
    UnderlyingSettlPrice?: number;
    UnderlyingSettlPriceType?: number;
    UnderlyingDeliveryAmount?: number;
    UnderlyingAmount?: IUnderlyingAmount[];
}
