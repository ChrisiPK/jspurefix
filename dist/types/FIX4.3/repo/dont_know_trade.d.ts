/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IOrderQtyData } from './set/order_qty_data';
import { IStandardTrailer } from './set/standard_trailer';
export interface IDontKnowTrade {
    StandardHeader: IStandardHeader;
    OrderID: string;
    ExecID: string;
    DKReason: string;
    Instrument: IInstrument;
    Side: string;
    OrderQtyData: IOrderQtyData;
    LastShares?: number;
    LastPx?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
