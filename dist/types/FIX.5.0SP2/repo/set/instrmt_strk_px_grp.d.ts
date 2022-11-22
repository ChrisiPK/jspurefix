/// <reference types="node" />
import { IInstrument } from './instrument';
import { IUndInstrmtGrp } from './und_instrmt_grp';
export interface IInstrmtStrkPxGrp {
    Instrument: IInstrument;
    UndInstrmtGrp?: IUndInstrmtGrp;
    PrevClosePx?: number;
    ClOrdID?: string;
    SecondaryClOrdID?: string;
    Side?: string;
    Price?: number;
    Currency?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
