import { IStandardHeader } from './set/standard_header';
import { ISideCrossOrdCxlGrp } from './set/side_cross_ord_cxl_grp';
import { IInstrument } from './set/instrument';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface ICrossOrderCancelRequest {
    StandardHeader: IStandardHeader;
    OrderID?: string;
    CrossID: string;
    OrigCrossID: string;
    CrossType: number;
    CrossPrioritization: number;
    SideCrossOrdCxlGrp: ISideCrossOrdCxlGrp[];
    Instrument: IInstrument;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    TransactTime: Date;
    StandardTrailer: IStandardTrailer;
}
