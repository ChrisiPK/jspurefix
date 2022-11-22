/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { ISecurityDefinitionNoRelatedSym } from './set/security_definition_no_related_sym';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityDefinition {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityResponseType?: number;
    TotalNumSecurities: number;
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
    TradingSessionID?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    NoRelatedSym?: ISecurityDefinitionNoRelatedSym[];
    StandardTrailer: IStandardTrailer;
}
