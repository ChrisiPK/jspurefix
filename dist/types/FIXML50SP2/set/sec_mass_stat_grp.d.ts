/// <reference types="node" />
import { IInstrument } from './instrument';
import { IInstrumentExtension } from './instrument_extension';
import { IFinancingDetails } from './financing_details';
import { IUndInstrmtGrp } from './und_instrmt_grp';
import { IInstrmtLegGrp } from './instrmt_leg_grp';
import { IRelatedInstrumentGrp } from './related_instrument_grp';
export interface ISecMassStatGrp {
    SecurityTradingStatus?: number;
    SecurityTradingEvent?: number;
    HaltReason?: number;
    FinancialStatus?: string;
    CorporateAction?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    RelatedInstrumentGrp?: IRelatedInstrumentGrp[];
}
