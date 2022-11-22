/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface IEmail {
    StandardHeader: IStandardHeader;
    EmailThreadID: string;
    EmailType: string;
    OrigTime?: Date;
    Subject: string;
    EncodedSubjectLen?: number;
    EncodedSubject?: Buffer;
    NoRoutingIDs?: number;
    RoutingType?: number;
    RoutingID?: string;
    NoRelatedSym?: number;
    Instrument?: IInstrument;
    OrderID?: string;
    ClOrdID?: string;
    LinesOfText: number;
    Text: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    RawDataLength?: number;
    RawData?: Buffer;
    StandardTrailer: IStandardTrailer;
}
