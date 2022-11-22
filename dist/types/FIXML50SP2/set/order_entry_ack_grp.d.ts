import { IOrderQtyData } from './order_qty_data';
import { IInstrument } from './instrument';
export interface IOrderEntryAckGrp {
    OrdStatus?: string;
    ExecType?: string;
    ExecTypeReason?: number;
    OrderEntryAction?: string;
    OrderEntryID?: number;
    ClOrdID?: string;
    OrigClOrdID?: string;
    OrderID?: string;
    OrdRejReason?: number;
    CumQty?: number;
    LeavesQty?: number;
    CxlQty?: number;
    OrdType?: string;
    Price?: number;
    Side?: string;
    TimeInForce?: string;
    OrderQtyData?: IOrderQtyData;
    Instrument?: IInstrument;
}
