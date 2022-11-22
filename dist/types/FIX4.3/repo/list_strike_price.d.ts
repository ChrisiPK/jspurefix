/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface IListStrikePrice {
    StandardHeader: IStandardHeader;
    ListID: string;
    TotNoStrikes: number;
    NoStrikes: number;
    Instrument: IInstrument;
    PrevClosePx?: number;
    ClOrdID?: string;
    Side?: string;
    Price: number;
    Currency?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
