/// <reference types="node" />
import { IInstrument } from './instrument';
import { ISecurityListNoRelatedSymNoLegs } from './security_list_no_related_sym_no_legs';
export interface ISecurityListNoRelatedSym {
    Instrument?: IInstrument;
    Currency?: string;
    NoLegs?: ISecurityListNoRelatedSymNoLegs[];
    RoundLot?: number;
    MinTradeVol?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
