/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { ITrdgSesGrp } from './set/trdg_ses_grp';
import { IPositionQty } from './set/position_qty';
import { IStandardTrailer } from './set/standard_trailer';
export interface IPositionMaintenanceRequest {
    StandardHeader: IStandardHeader;
    PosReqID: string;
    PosTransType: number;
    PosMaintAction: number;
    OrigPosReqRefID?: string;
    PosMaintRptRefID?: string;
    ClearingBusinessDate: Date;
    SettlSessID?: string;
    SettlSessSubID?: string;
    Parties?: IParties;
    Account: string;
    AcctIDSource?: number;
    AccountType: number;
    Instrument?: IInstrument;
    Currency?: string;
    InstrmtLegGrp?: IInstrmtLegGrp;
    UndInstrmtGrp?: IUndInstrmtGrp;
    TrdgSesGrp?: ITrdgSesGrp;
    TransactTime: Date;
    PositionQty?: IPositionQty;
    AdjustmentType?: number;
    ContraryInstructionIndicator?: boolean;
    PriorSpreadIndicator?: boolean;
    ThresholdAmount?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
