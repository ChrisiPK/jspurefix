/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IEmail {
    StandardHeader: IStandardHeader;
    EmailType: string;
    OrigTime?: string;
    RelatdSym?: string;
    OrderID?: string;
    ClOrdID?: string;
    LinesOfText: number;
    Text: string;
    RawDataLength?: number;
    RawData?: Buffer;
    StandardTrailer: IStandardTrailer;
}
