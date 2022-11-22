/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IAdvertisement {
    StandardHeader: IStandardHeader;
    AdvId: string;
    AdvTransType: string;
    AdvRefID?: string;
    Instrument: IInstrument;
    InstrmtLegGrp?: IInstrmtLegGrp;
    UndInstrmtGrp?: IUndInstrmtGrp;
    AdvSide: string;
    Quantity: number;
    QtyType?: number;
    Price?: number;
    Currency?: string;
    TradeDate?: Date;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    URLLink?: string;
    LastMkt?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    StandardTrailer: IStandardTrailer;
}
