/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMarketDataSnapshotFullRefresh {
    StandardHeader: IStandardHeader;
    MDReqID?: string;
    Instrument: IInstrument;
    FinancialStatus?: string;
    CorporateAction?: string;
    TotalVolumeTraded?: number;
    NoMDEntries: number;
    MDEntryType: string;
    MDEntryPx?: number;
    Currency?: string;
    MDEntrySize?: number;
    MDEntryDate?: string;
    MDEntryTime?: string;
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
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
