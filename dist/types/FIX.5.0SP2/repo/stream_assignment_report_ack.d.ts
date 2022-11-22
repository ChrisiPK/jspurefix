/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IStreamAssignmentReportACK {
    StandardHeader: IStandardHeader;
    StreamAsgnAckType: number;
    StreamAsgnRptID: string;
    StreamAsgnRejReason?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
