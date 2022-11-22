/// <reference types="node" />
import { IInstrument } from './instrument';
import { ISecondaryPriceLimits } from './secondary_price_limits';
import { IInstrumentExtension } from './instrument_extension';
import { IInstrmtLegGrp } from './instrmt_leg_grp';
export interface IRelSymDerivSecGrp {
    Instrument?: IInstrument;
    SecondaryPriceLimits?: ISecondaryPriceLimits;
    Currency?: string;
    CorporateAction?: string;
    InstrumentExtension?: IInstrumentExtension;
    InstrmtLegGrp?: IInstrmtLegGrp;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    RelSymTransactTime?: Date;
}
