import { IInstrument } from './instrument';
import { IUndInstrmtGrp } from './und_instrmt_grp';
import { IInstrmtLegGrp } from './instrmt_leg_grp';
export interface IRFQReqGrp {
    Instrument: IInstrument;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    PrevClosePx?: number;
    QuoteRequestType?: number;
    QuoteType?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
}
