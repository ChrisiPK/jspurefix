/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface ITradingSessionStatus {
    StandardHeader: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    TradSesReqID?: string;
    MarketID?: string;
    MarketSegmentID?: string;
    TradingSessionID: string;
    TradingSessionSubID?: string;
    TradSesMethod?: number;
    TradSesMode?: number;
    UnsolicitedIndicator?: boolean;
    TradSesStatus: number;
    TradSesEvent?: number;
    TradSesStatusRejReason?: number;
    TradSesStartTime?: Date;
    TradSesOpenTime?: Date;
    TradSesPreCloseTime?: Date;
    TradSesCloseTime?: Date;
    TradSesEndTime?: Date;
    TotalVolumeTraded?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    Instrument?: IInstrument;
    StandardTrailer: IStandardTrailer;
}
