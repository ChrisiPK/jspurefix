/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface INews {
    StandardHeader: IStandardHeader;
    OrigTime?: string;
    Urgency?: string;
    RelatdSym?: string;
    LinesOfText: number;
    Text: string;
    RawDataLength?: number;
    RawData?: Buffer;
    StandardTrailer: IStandardTrailer;
}
