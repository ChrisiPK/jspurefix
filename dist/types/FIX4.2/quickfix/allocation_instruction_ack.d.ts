/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IAllocationInstructionAck {
    StandardHeader: IStandardHeader;
    ClientID?: string;
    ExecBroker?: string;
    AllocID: string;
    TradeDate: Date;
    TransactTime?: Date;
    AllocStatus: number;
    AllocRejCode?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
