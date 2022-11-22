/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface ITradingSessionStatus {
    StandardHeader: IStandardHeader;
    TradSesReqID?: string;
    TradingSessionID: string;
    TradSesMethod?: number;
    TradSesMode?: number;
    UnsolicitedIndicator?: boolean;
    TradSesStatus: number;
    TradSesStartTime?: Date;
    TradSesOpenTime?: Date;
    TradSesPreCloseTime?: Date;
    TradSesCloseTime?: Date;
    TradSesEndTime?: Date;
    TotalVolumeTraded?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
