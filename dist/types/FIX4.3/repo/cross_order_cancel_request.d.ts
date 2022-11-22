/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IOrderQtyData } from './set/order_qty_data';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface ICrossOrderCancelRequest {
    StandardHeader: IStandardHeader;
    OrderID?: string;
    Side: string;
    OrigClOrdID: string;
    ClOrdID: string;
    Parties?: IParties[];
    OrderQtyData: IOrderQtyData;
    ComplianceID?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    Instrument: IInstrument;
    TransactTime: Date;
    StandardTrailer: IStandardTrailer;
}
