/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
export interface IListExecute {
    ListID: string;
    ClientBidID?: string;
    BidID?: string;
    TransactTime: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
}
