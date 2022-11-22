/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityStatus {
    StandardHeader: IStandardHeader;
    SecurityStatusReqID?: string;
    Instrument: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    Currency?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    UnsolicitedIndicator?: boolean;
    SecurityTradingStatus?: number;
    FinancialStatus?: string;
    CorporateAction?: string;
    HaltReason?: string;
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
