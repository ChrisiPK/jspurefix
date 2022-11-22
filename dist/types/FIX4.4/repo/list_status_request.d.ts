/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IListStatusRequest {
    StandardHeader: IStandardHeader;
    ListID: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}