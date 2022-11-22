import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IPositionQty } from './set/position_qty';
import { IInstrmtGrp } from './set/instrmt_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IAdjustedPositionReport {
    StandardHeader: IStandardHeader;
    PosMaintRptID: string;
    PosReqType?: number;
    ClearingBusinessDate: Date;
    SettlSessID?: string;
    PosMaintRptRefID?: string;
    Parties: IParties[];
    PositionQty: IPositionQty[];
    InstrmtGrp?: IInstrmtGrp[];
    SettlPrice?: number;
    PriorSettlPrice?: number;
    StandardTrailer: IStandardTrailer;
}
