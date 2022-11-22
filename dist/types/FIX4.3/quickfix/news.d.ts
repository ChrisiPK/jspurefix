/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { INewsNoRoutingIDs } from './set/news_no_routing_i_ds';
import { INewsNoRelatedSym } from './set/news_no_related_sym';
import { INewsLinesOfText } from './set/news_lines_of_text';
import { IStandardTrailer } from './set/standard_trailer';
export interface INews {
    StandardHeader: IStandardHeader;
    OrigTime?: Date;
    Urgency?: string;
    Headline: string;
    EncodedHeadlineLen?: number;
    EncodedHeadline?: Buffer;
    NoRoutingIDs?: INewsNoRoutingIDs[];
    NoRelatedSym?: INewsNoRelatedSym[];
    LinesOfText: INewsLinesOfText[];
    URLLink?: string;
    RawDataLength?: number;
    RawData?: Buffer;
    StandardTrailer: IStandardTrailer;
}
