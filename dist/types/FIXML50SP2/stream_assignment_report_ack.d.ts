/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
export interface IStreamAssignmentReportACK {
    StreamAsgnAckType: number;
    StreamAsgnRptID: string;
    OrdRejReason?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
}
