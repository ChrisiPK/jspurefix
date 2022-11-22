/// <reference types="node" />
import { IInstrument } from './instrument';
import { ISecondaryPriceLimits } from './secondary_price_limits';
import { IInstrumentExtension } from './instrument_extension';
import { IInstrmtLegGrp } from './instrmt_leg_grp';
export interface IRelSymDerivSecGrp {
    Currency?: string;
    CorporateAction?: string;
    RelSymTransactTime?: Date;
    NumOfSimpleInstruments?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    Instrument?: IInstrument;
    SecondaryPriceLimits?: ISecondaryPriceLimits;
    InstrumentExtension?: IInstrumentExtension;
    InstrmtLegGrp?: IInstrmtLegGrp[];
}
