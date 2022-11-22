/// <reference types="node" />
export interface ISecurityDefinitionRequestNoRelatedSym {
    UnderlyingSymbol?: string;
    UnderlyingSymbolSfx?: string;
    UnderlyingSecurityID?: string;
    UnderlyingIDSource?: string;
    UnderlyingSecurityType?: string;
    UnderlyingMaturityMonthYear?: string;
    UnderlyingMaturityDay?: string;
    UnderlyingPutOrCall?: number;
    UnderlyingStrikePrice?: number;
    UnderlyingOptAttribute?: string;
    UnderlyingContractMultiplier?: number;
    UnderlyingCouponRate?: number;
    UnderlyingSecurityExchange?: string;
    UnderlyingIssuer?: string;
    EncodedUnderlyingIssuerLen?: number;
    EncodedUnderlyingIssuer?: Buffer;
    UnderlyingSecurityDesc?: string;
    EncodedUnderlyingSecurityDescLen?: number;
    EncodedUnderlyingSecurityDesc?: Buffer;
    RatioQty?: number;
    Side?: string;
    UnderlyingCurrency?: string;
}
