/// <reference types="node" />
import { IInstrument } from './instrument';
import { IInstrumentExtension } from './instrument_extension';
import { ISecondaryPriceLimits } from './secondary_price_limits';
import { IInstrmtLegGrp } from './instrmt_leg_grp';
export interface IRelSymDerivSecUpdGrp {
    ListUpdateAction?: string;
    CorporateAction?: string;
    Currency?: string;
    RelSymTransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    SecondaryPriceLimits?: ISecondaryPriceLimits;
    InstrmtLegGrp?: IInstrmtLegGrp[];
}
