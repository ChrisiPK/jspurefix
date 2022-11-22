/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityDefinition {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityResponseType: number;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    UndInstrmtGrp?: IUndInstrmtGrp;
    Currency?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    InstrmtLegGrp?: IInstrmtLegGrp;
    ExpirationCycle?: number;
    RoundLot?: number;
    MinTradeVol?: number;
    StandardTrailer: IStandardTrailer;
}
