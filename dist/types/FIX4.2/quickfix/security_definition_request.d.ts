/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { ISecurityDefinitionRequestNoRelatedSym } from './set/security_definition_request_no_related_sym';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityDefinitionRequest {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    SecurityRequestType: number;
    Symbol?: string;
    SymbolSfx?: string;
    SecurityID?: string;
    IDSource?: string;
    SecurityType?: string;
    MaturityMonthYear?: string;
    MaturityDay?: string;
    PutOrCall?: number;
    StrikePrice?: number;
    OptAttribute?: string;
    ContractMultiplier?: number;
    CouponRate?: number;
    SecurityExchange?: string;
    Issuer?: string;
    EncodedIssuerLen?: number;
    EncodedIssuer?: Buffer;
    SecurityDesc?: string;
    EncodedSecurityDescLen?: number;
    EncodedSecurityDesc?: Buffer;
    Currency?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    NoRelatedSym?: ISecurityDefinitionRequestNoRelatedSym[];
    StandardTrailer: IStandardTrailer;
}
