/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IInstrument } from './set/instrument';
export interface ITradingSessionStatus {
    TradSesReqID?: string;
    MarketID?: string;
    MarketSegmentID?: string;
    TradeDate?: Date;
    TradingSessionID: string;
    TradingSessionSubID?: string;
    TradSesMethod?: number;
    TradSesMode?: number;
    UnsolicitedIndicator?: boolean;
    AllocStatus: number;
    TradSesEvent?: number;
    FastMarketIndicator?: boolean;
    TradSesStatusRejReason?: number;
    TradSesStartTime?: Date;
    TradSesOpenTime?: Date;
    TradSesPreCloseTime?: Date;
    TradSesCloseTime?: Date;
    TradSesEndTime?: Date;
    TradSesControl?: number;
    TotalVolumeTraded?: number;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    Instrument?: IInstrument;
}
