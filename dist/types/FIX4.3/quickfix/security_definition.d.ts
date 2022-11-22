/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { ISecurityDefinitionNoLegs } from './set/security_definition_no_legs';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityDefinition {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityResponseType: number;
    Instrument?: IInstrument;
    Currency?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    NoLegs?: ISecurityDefinitionNoLegs[];
    RoundLot?: number;
    MinTradeVol?: number;
    StandardTrailer: IStandardTrailer;
}
