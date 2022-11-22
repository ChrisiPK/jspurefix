/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { ITargetParties } from './set/target_parties';
import { IInstrument } from './set/instrument';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IPositionQty } from './set/position_qty';
import { IPositionAmountData } from './set/position_amount_data';
export interface IPositionTransferInstruction {
    TransferInstructionID: string;
    TransferID?: string;
    TransferTransType?: number;
    TransferType?: number;
    TransferScope?: number;
    ClearingBusinessDate?: Date;
    TradeDate?: Date;
    TransactTime?: Date;
    ClearingTradePrice?: number;
    Currency?: string;
    PriceType?: number;
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
