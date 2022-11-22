/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
export interface IConfirmationAck {
    ConfirmID: string;
    TradeDate: Date;
    TransactTime: Date;
    AffirmStatus: number;
    TradeConfirmationReferenceID?: string;
    ConfirmRejReason?: number;
    MatchStatus?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
}
