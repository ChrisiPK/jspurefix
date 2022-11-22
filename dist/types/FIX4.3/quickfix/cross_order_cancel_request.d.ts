import { IStandardHeader } from './set/standard_header';
import { ICrossOrderCancelRequestNoSides } from './set/cross_order_cancel_request_no_sides';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface ICrossOrderCancelRequest {
    StandardHeader: IStandardHeader;
    OrderID?: string;
    CrossID: string;
    OrigCrossID: string;
    CrossType: number;
    CrossPrioritization: number;
    NoSides: ICrossOrderCancelRequestNoSides[];
    Instrument?: IInstrument;
    TransactTime: Date;
    StandardTrailer: IStandardTrailer;
}
