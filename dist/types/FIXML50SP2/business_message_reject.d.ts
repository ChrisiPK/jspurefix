/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
export interface IBusinessMessageReject {
    RefSeqNum?: number;
    RefMsgType: string;
    RefApplVerID?: string;
    RefApplExtID?: number;
    RefCstmApplVerID?: string;
    BusinessRejectRefID?: string;
    BusinessRejectReason: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
}
