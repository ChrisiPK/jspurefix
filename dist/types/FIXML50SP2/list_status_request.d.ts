/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
export interface IListStatusRequest {
    ListID: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
}
