import { IInstrument } from './instrument';
import { IInstrmtLegGrp } from './instrmt_leg_grp';
import { IUndInstrmtGrp } from './und_instrmt_grp';
import { ITrdMatchSideGrp } from './trd_match_side_grp';
export interface IInstrmtMatchSideGrp {
    TrdMatchSubID?: string;
    Quantity?: number;
    Currency?: string;
    SettlCurrency?: string;
    QtyType?: number;
    LastQty?: number;
    PriceType?: number;
    LastPx?: number;
    LastMkt?: string;
    Instrument?: IInstrument;
    InstrmtLegGrp?: IInstrmtLegGrp[];
    UndInstrmtGrp?: IUndInstrmtGrp[];
    TrdMatchSideGrp?: ITrdMatchSideGrp[];
}
