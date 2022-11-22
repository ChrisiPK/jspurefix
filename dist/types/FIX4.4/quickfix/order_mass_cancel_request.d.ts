/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IUnderlyingInstrument } from './set/underlying_instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface IOrderMassCancelRequest {
    StandardHeader: IStandardHeader;
    ClOrdID: string;
    SecondaryClOrdID?: string;
    MassCancelRequestType: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Instrument?: IInstrument;
    UnderlyingInstrument?: IUnderlyingInstrument;
    Side?: string;
    TransactTime: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
