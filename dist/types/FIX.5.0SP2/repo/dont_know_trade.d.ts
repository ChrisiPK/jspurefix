/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IOrderQtyData } from './set/order_qty_data';
import { IStandardTrailer } from './set/standard_trailer';
export interface IDontKnowTrade {
    StandardHeader: IStandardHeader;
    OrderID: string;
    SecondaryOrderID?: string;
    ExecID: string;
    DKReason: string;
    Instrument: IInstrument;
    UndInstrmtGrp?: IUndInstrmtGrp;
    InstrmtLegGrp?: IInstrmtLegGrp;
    Side: string;
    OrderQtyData: IOrderQtyData;
    LastQty?: number;
    LastPx?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
