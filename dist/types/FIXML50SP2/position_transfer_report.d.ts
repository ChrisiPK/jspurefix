/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { ITargetParties } from './set/target_parties';
import { IInstrument } from './set/instrument';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IPositionQty } from './set/position_qty';
import { IPositionAmountData } from './set/position_amount_data';
export interface IPositionTransferReport {
    TransferInstructionID?: string;
    TransferReportID: string;
    TransferID: string;
    TransferTransType: number;
    TransferReportType: number;
    TransferStatus: number;
    OrdRejReason?: number;
    TransferScope?: number;
    ClearingBusinessDate?: Date;
    TradeDate?: Date;
    TransactTime?: Date;
    ClearingTradePrice?: number;
    Currency?: string;
    PriceType?: number;
    RejectText?: string;
    EncodedRejectTextLen?: number;
    EncodedRejectText?: Buffer;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
    TargetParties?: ITargetParties[];
    Instrument?: IInstrument;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    PositionQty?: IPositionQty[];
    PositionAmountData?: IPositionAmountData[];
}
