import { IUnderlyingInstrument } from './underlying_instrument';
import { IUnderlyingAmount } from './underlying_amount';
export interface IPosUndInstrmtGrp {
    UnderlyingSettlPrice?: number;
    UnderlyingSettlPriceType?: number;
    UnderlyingDeliveryAmount?: number;
    UnderlyingInstrument?: IUnderlyingInstrument;
    UnderlyingAmount?: IUnderlyingAmount[];
}
