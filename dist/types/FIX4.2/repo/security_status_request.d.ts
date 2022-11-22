/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityStatusRequest {
    StandardHeader: IStandardHeader;
    SecurityStatusReqID: string;
    Symbol: string;
    SymbolSfx?: string;
    SecurityID?: string;
    IDSource?: string;
    SecurityType?: string;
    MaturityMonthYear?: string;
    MaturityDay?: number;
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
    SubscriptionRequestType: string;
    TradingSessionID?: string;
    StandardTrailer: IStandardTrailer;
}
