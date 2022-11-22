/// <reference types="node" />
import { IInstrument } from './instrument';
export interface IListStrikePriceNoStrikes {
    Instrument: IInstrument;
    PrevClosePx?: number;
    ClOrdID?: string;
    SecondaryClOrdID?: string;
    Side?: string;
    Price: number;
    Currency?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
