/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityTypes {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityResponseType: number;
    SecurityType?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    SubscriptionRequestType?: string;
    StandardTrailer: IStandardTrailer;
}
