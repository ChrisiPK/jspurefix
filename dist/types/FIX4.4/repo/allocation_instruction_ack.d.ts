/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IAllocAckGrp } from './set/alloc_ack_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IAllocationInstructionAck {
    StandardHeader: IStandardHeader;
    AllocID: string;
    Parties?: IParties[];
    SecondaryAllocID?: string;
    TradeDate?: Date;
    TransactTime: Date;
    AllocStatus: number;
    AllocRejCode?: number;
    AllocType?: number;
    AllocIntermedReqType?: number;
    MatchStatus?: string;
    Product?: number;
    SecurityType?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    AllocAckGrp?: IAllocAckGrp[];
    StandardTrailer: IStandardTrailer;
}
