/// <reference types="node" />
export interface IQuoteRequestNoRelatedSym {
    Symbol: string;
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
    PrevClosePx?: number;
    QuoteRequestType?: number;
    TradingSessionID?: string;
    Side?: string;
    OrderQty?: number;
    FutSettDate?: Date;
    OrdType?: string;
    FutSettDate2?: Date;
    OrderQty2?: number;
    ExpireTime?: Date;
    TransactTime?: Date;
    Currency?: string;
}
