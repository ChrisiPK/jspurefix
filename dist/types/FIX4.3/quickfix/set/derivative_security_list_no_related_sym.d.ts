/// <reference types="node" />
import { IInstrument } from './instrument';
import { IDerivativeSecurityListNoRelatedSymNoLegs } from './derivative_security_list_no_related_sym_no_legs';
export interface IDerivativeSecurityListNoRelatedSym {
    Instrument?: IInstrument;
    Currency?: string;
    NoLegs?: IDerivativeSecurityListNoRelatedSymNoLegs[];
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
