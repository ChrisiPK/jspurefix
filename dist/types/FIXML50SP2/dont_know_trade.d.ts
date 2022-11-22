/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IOrderQtyData } from './set/order_qty_data';
export interface IDontKnowTrade {
    OrderID: string;
    SecondaryOrderID?: string;
    ExecID: string;
    DKReason: string;
    Side: string;
    LastQty?: number;
    LastPx?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    Instrument?: IInstrument;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    OrderQtyData?: IOrderQtyData;
}
