/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IUnderlyingInstrument } from './set/underlying_instrument';
import { IInstrument } from './set/instrument';
import { IInstrumentLeg } from './set/instrument_leg';
import { IStandardTrailer } from './set/standard_trailer';
export interface IDerivativeSecurityList {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    SecurityResponseID: string;
    UnderlyingInstrument?: IUnderlyingInstrument;
    TotalNumSecurities?: number;
    NoRelatedSym?: number;
    Instrument?: IInstrument;
    Currency?: string;
    InstrumentLeg?: IInstrumentLeg;
    TradingSessionID?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
