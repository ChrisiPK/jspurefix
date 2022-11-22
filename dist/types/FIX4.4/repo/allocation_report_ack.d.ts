/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IAllocAckGrp } from './set/alloc_ack_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IAllocationReportAck {
    StandardHeader: IStandardHeader;
    AllocReportID: string;
    AllocID: string;
    Parties?: IParties[];
    SecondaryAllocID?: string;
    TradeDate?: Date;
    TransactTime: Date;
    AllocStatus: number;
    AllocRejCode?: number;
    AllocReportType?: number;
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
