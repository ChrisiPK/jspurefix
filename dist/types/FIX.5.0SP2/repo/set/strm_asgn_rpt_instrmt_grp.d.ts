/// <reference types="node" />
import { IInstrument } from './instrument';
export interface IStrmAsgnRptInstrmtGrp {
    Instrument?: IInstrument;
    SettlType?: string;
    StreamAsgnType?: number;
    MDStreamID?: string;
    StreamAsgnRejReason?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
