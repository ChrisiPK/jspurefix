/// <reference types="node" />
import { IInstrument } from './instrument';
export interface IMarketDataIncrementalRefreshNoMDEntries {
    MDUpdateAction: string;
    DeleteReason?: string;
    MDEntryType?: string;
    MDEntryID?: string;
    MDEntryRefID?: string;
    Instrument: IInstrument;
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
    TradingSessionSubID?: string;
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
    Scope?: string;
    TotalVolumeTraded?: number;
    TotalVolumeTradedDate?: string;
    TotalVolumeTradedTime?: Date;
    NetChgPrevDay?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}