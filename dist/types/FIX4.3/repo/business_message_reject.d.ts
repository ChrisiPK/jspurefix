/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IBusinessMessageReject {
    StandardHeader: IStandardHeader;
    RefSeqNum?: number;
    RefMsgType: string;
    BusinessRejectRefID?: string;
    BusinessRejectReason: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
