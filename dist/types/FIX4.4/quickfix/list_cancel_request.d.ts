/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IListCancelRequest {
    StandardHeader: IStandardHeader;
    ListID: string;
    TransactTime: Date;
    TradeOriginationDate?: Date;
    TradeDate?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
