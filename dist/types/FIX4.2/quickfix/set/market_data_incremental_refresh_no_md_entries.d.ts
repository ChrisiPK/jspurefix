/// <reference types="node" />
export interface IMarketDataIncrementalRefreshNoMDEntries {
    MDUpdateAction: string;
    DeleteReason?: string;
    MDEntryType?: string;
    MDEntryID?: string;
    MDEntryRefID?: string;
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
    FinancialStatus?: string;
    CorporateAction?: string;
    MDEntryPx?: number;
    Currency?: string;
    MDEntrySize?: number;
    MDEntryDate?: string;
    MDEntryTime?: Date;
    TickDirection?: string;
    MDMkt?: string;
    TradingSessionID?: string;
    QuoteCondition?: string;
    TradeCondition?: string;
    MDEntryOriginator?: string;
    LocationID?: string;
    DeskID?: string;
    OpenCloseSettleFlag?: string;
    TimeInForce?: string;
    ExpireDate?: Date;
    ExpireTime?: Date;
    MinQty?: number;
    ExecInst?: string;
    SellerDays?: number;
    OrderID?: string;
    QuoteEntryID?: string;
    MDEntryBuyer?: string;
    MDEntrySeller?: string;
    NumberOfOrders?: number;
    MDEntryPositionNo?: number;
    TotalVolumeTraded?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
