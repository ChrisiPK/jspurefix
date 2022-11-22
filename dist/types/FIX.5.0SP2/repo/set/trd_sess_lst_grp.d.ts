/// <reference types="node" />
import { ITradingSessionRules } from './trading_session_rules';
export interface ITrdSessLstGrp {
    TradingSessionID: string;
    TradingSessionSubID?: string;
    SecurityExchange?: string;
    MarketID?: string;
    MarketSegmentID?: string;
    TradingSessionDesc?: string;
    TradSesMethod?: number;
    TradSesMode?: number;
    UnsolicitedIndicator?: boolean;
    TradSesStatus: number;
    TradSesStatusRejReason?: number;
    TradSesStartTime?: Date;
    TradSesOpenTime?: Date;
    TradSesPreCloseTime?: Date;
    TradSesCloseTime?: Date;
    TradSesEndTime?: Date;
    TotalVolumeTraded?: number;
    TradingSessionRules?: ITradingSessionRules;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TransactTime?: Date;
    TradSesUpdateAction?: string;
}
