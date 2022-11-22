/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IPositionQty } from './set/position_qty';
import { IPositionAmountData } from './set/position_amount_data';
import { IStandardTrailer } from './set/standard_trailer';
export interface IAssignmentReport {
    StandardHeader: IStandardHeader;
    AsgnRptID: string;
    TotNumAssignmentReports?: number;
    LastRptRequested?: boolean;
    Parties?: IParties;
    Account?: string;
    AccountType: number;
    Instrument?: IInstrument;
    Currency?: string;
    InstrmtLegGrp?: IInstrmtLegGrp;
    UndInstrmtGrp?: IUndInstrmtGrp;
    PositionQty?: IPositionQty;
    PositionAmountData?: IPositionAmountData;
    ThresholdAmount?: number;
    SettlPrice: number;
    SettlPriceType: number;
    UnderlyingSettlPrice: number;
    ExpireDate?: Date;
    AssignmentMethod: string;
    AssignmentUnit?: number;
    OpenInterest: number;
    ExerciseMethod: string;
    SettlSessID: string;
    SettlSessSubID: string;
    ClearingBusinessDate: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}