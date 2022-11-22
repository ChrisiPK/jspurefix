/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { ISecurityTypesNoSecurityTypes } from './set/security_types_no_security_types';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityTypes {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityResponseType: number;
    TotalNumSecurityTypes?: number;
    NoSecurityTypes?: ISecurityTypesNoSecurityTypes[];
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SubscriptionRequestType?: string;
    StandardTrailer: IStandardTrailer;
}
