/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { ISecurityDefinitionRequestNoLegs } from './set/security_definition_request_no_legs';
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
    TradingSessionSubID?: string;
    NoLegs?: ISecurityDefinitionRequestNoLegs[];
    SubscriptionRequestType?: string;
    StandardTrailer: IStandardTrailer;
}
