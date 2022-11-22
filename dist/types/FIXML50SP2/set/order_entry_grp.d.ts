import { IOrderQtyData } from './order_qty_data';
import { IInstrument } from './instrument';
export interface IOrderEntryGrp {
    OrderEntryAction?: string;
    OrderEntryID?: number;
    ClOrdID?: string;
    OrigClOrdID?: string;
    OrderID?: string;
    OrdType?: string;
    Price?: number;
    Side?: string;
    TimeInForce?: string;
    OrderQtyData?: IOrderQtyData;
    Instrument?: IInstrument;
}
