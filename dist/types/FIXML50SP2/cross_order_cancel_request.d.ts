import { IStandardHeader } from './set/standard_header';
import { IRootParties } from './set/root_parties';
import { ISideCrossOrdCxlGrp } from './set/side_cross_ord_cxl_grp';
import { IInstrument } from './set/instrument';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
export interface ICrossOrderCancelRequest {
    OrderID?: string;
    OrderRequestID?: number;
    CrossID: string;
    OrigCrossID: string;
    HostCrossID?: string;
    CrossType: number;
    CrossPrioritization: number;
    MarketSegmentID?: string;
    TransactTime: Date;
    StandardHeader?: IStandardHeader;
    RootParties?: IRootParties[];
    SideCrossOrdCxlGrp?: ISideCrossOrdCxlGrp[];
    Instrument?: IInstrument;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
}
