/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IStandardTrailer } from './set/standard_trailer';
export interface INews {
    StandardHeader: IStandardHeader;
    OrigTime?: Date;
    Urgency?: string;
    Headline: string;
    EncodedHeadlineLen?: number;
    EncodedHeadline?: Buffer;
    NoRoutingIDs?: number;
    RoutingType?: number;
    RoutingID?: string;
    NoRelatedSym?: number;
    Instrument?: IInstrument;
    LinesOfText: number;
    Text: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    URLLink?: string;
    RawDataLength?: number;
    RawData?: Buffer;
    StandardTrailer: IStandardTrailer;
}
