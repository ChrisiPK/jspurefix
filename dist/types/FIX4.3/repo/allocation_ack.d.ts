/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IStandardTrailer } from './set/standard_trailer';
export interface IAllocationAck {
    StandardHeader: IStandardHeader;
    Parties?: IParties[];
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
