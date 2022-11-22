/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IInstrumentLeg } from './set/instrument_leg';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityDefinition {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityResponseType: number;
    Instrument?: IInstrument;
    Currency?: string;
    TradingSessionID?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    InstrumentLeg?: IInstrumentLeg;
    StandardTrailer: IStandardTrailer;
}
