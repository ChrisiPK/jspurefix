/// <reference types="node" />
import { IInstrument } from './instrument';
export interface IStrmAsgnRptInstrmtGrp {
    SettlType?: string;
    StreamAsgnType?: number;
    MDStreamID?: string;
    OrdRejReason?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    Instrument?: IInstrument;
}
