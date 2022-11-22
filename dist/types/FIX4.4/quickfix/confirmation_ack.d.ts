/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IConfirmationAck {
    StandardHeader: IStandardHeader;
    ConfirmID: string;
    TradeDate: Date;
    TransactTime: Date;
    AffirmStatus: number;
    ConfirmRejReason?: number;
    MatchStatus?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
