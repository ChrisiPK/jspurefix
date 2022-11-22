/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
export interface IListCancelRequest {
    ListID: string;
    TransactTime: Date;
    TradeOriginationDate?: Date;
    TradeDate?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
}
