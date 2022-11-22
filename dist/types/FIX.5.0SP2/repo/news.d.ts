/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IRoutingGrp } from './set/routing_grp';
import { IInstrmtGrp } from './set/instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { ILinesOfTextGrp } from './set/lines_of_text_grp';
import { IStandardTrailer } from './set/standard_trailer';
import { INewsRefGrp } from './set/news_ref_grp';
export interface INews {
    StandardHeader: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    OrigTime?: Date;
    Urgency?: string;
    Headline: string;
    EncodedHeadlineLen?: number;
    EncodedHeadline?: Buffer;
    RoutingGrp?: IRoutingGrp[];
    InstrmtGrp?: IInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp;
    UndInstrmtGrp?: IUndInstrmtGrp;
    LinesOfTextGrp: ILinesOfTextGrp[];
    URLLink?: string;
    RawDataLength?: number;
    RawData?: Buffer;
    StandardTrailer: IStandardTrailer;
    NewsID?: string;
    NewsRefGrp?: INewsRefGrp[];
    NewsCategory?: number;
    LanguageCode?: string;
    MarketID?: string;
    MarketSegmentID?: string;
}
