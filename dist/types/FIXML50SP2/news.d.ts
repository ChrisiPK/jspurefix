/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { INewsRefGrp } from './set/news_ref_grp';
import { IRoutingGrp } from './set/routing_grp';
import { IInstrmtGrp } from './set/instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { ILinesOfTextGrp } from './set/lines_of_text_grp';
export interface INews {
    NewsID?: string;
    NewsCategory?: number;
    LanguageCode?: string;
    OrigTime?: Date;
    Urgency?: string;
    Headline: string;
    EncodedHeadlineLen?: number;
    EncodedHeadline?: Buffer;
    MarketID?: string;
    MarketSegmentID?: string;
    URLLink?: string;
    RawDataLength?: number;
    RawData?: Buffer;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    NewsRefGrp?: INewsRefGrp[];
    RoutingGrp?: IRoutingGrp[];
    InstrmtGrp?: IInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    UndInstrmtGrp?: IUndInstrmtGrp[];
    LinesOfTextGrp?: ILinesOfTextGrp[];
}
