/// <reference types="node" />
export interface IMDFullGrpNoMDEntries {
    MDEntryType: string;
    MDEntryPx?: number;
    Currency?: string;
    MDEntrySize?: number;
    MDEntryDate?: Date;
    MDEntryTime?: Date;
    TickDirection?: string;
    MDMkt?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    QuoteCondition?: string;
    TradeCondition?: string;
    MDEntryOriginator?: string;
    LocationID?: string;
    DeskID?: string;
    OpenCloseSettlFlag?: string;
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
    Scope?: string;
    PriceDelta?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
