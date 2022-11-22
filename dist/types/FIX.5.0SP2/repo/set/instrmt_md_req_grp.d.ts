import { IInstrument } from './instrument';
import { IUndInstrmtGrp } from './und_instrmt_grp';
import { IInstrmtLegGrp } from './instrmt_leg_grp';
export interface IInstrmtMDReqGrp {
    Instrument: IInstrument;
    UndInstrmtGrp?: IUndInstrmtGrp;
    InstrmtLegGrp?: IInstrmtLegGrp;
    Currency?: string;
    QuoteType?: number;
    SettlType?: string;
    SettlDate?: Date;
    MDEntrySize?: number;
    MDStreamID?: string;
}
