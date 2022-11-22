/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityStatus {
    StandardHeader: IStandardHeader;
    SecurityStatusReqID?: string;
    Instrument?: IInstrument;
    Currency?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    UnsolicitedIndicator?: boolean;
    SecurityTradingStatus?: number;
    FinancialStatus?: string;
    CorporateAction?: string;
    HaltReasonChar?: string;
    InViewOfCommon?: boolean;
    DueToRelated?: boolean;
    BuyVolume?: number;
    SellVolume?: number;
    HighPx?: number;
    LowPx?: number;
    LastPx?: number;
    TransactTime?: Date;
    Adjustment?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
