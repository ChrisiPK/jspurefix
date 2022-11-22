/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IReject {
    StandardHeader: IStandardHeader;
    RefSeqNum: number;
    RefTagID?: number;
    RefMsgType?: string;
    RefApplVerID?: string;
    RefApplExtID?: number;
    RefCstmApplVerID?: string;
    SessionRejectReason?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
