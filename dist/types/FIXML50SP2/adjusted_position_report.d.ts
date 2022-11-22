import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IPositionQty } from './set/position_qty';
import { IInstrmtGrp } from './set/instrmt_grp';
export interface IAdjustedPositionReport {
    PosMaintRptID: string;
    PosReqType?: number;
    ClearingBusinessDate: Date;
    SettlSessID?: string;
    PosMaintRptRefID?: string;
    SettlPrice?: number;
    PriorSettlPrice?: number;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
    PositionQty?: IPositionQty[];
    InstrmtGrp?: IInstrmtGrp[];
}
