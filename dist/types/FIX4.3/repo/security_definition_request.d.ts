/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IInstrumentLeg } from './set/instrument_leg';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityDefinitionRequest {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    SecurityRequestType: number;
    Instrument?: IInstrument;
    Currency?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    InstrumentLeg?: IInstrumentLeg;
    SubscriptionRequestType?: string;
    StandardTrailer: IStandardTrailer;
}
