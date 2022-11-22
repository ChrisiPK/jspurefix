/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { ITargetParties } from './set/target_parties';
export interface IPositionTransferInstructionAck {
    TransferInstructionID: string;
    TransferID?: string;
    TransferTransType?: number;
    TransferType?: number;
    TransferStatus?: number;
    OrdRejReason?: number;
    TransferScope?: number;
    TransactTime?: Date;
    RejectText?: string;
    EncodedRejectTextLen?: number;
    EncodedRejectText?: Buffer;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
    TargetParties?: ITargetParties[];
}
