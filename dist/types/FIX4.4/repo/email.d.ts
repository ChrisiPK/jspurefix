/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IRoutingGrp } from './set/routing_grp';
import { IInstrmtGrp } from './set/instrmt_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { ILinesOfTextGrp } from './set/lines_of_text_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IEmail {
    StandardHeader: IStandardHeader;
    EmailThreadID: string;
    EmailType: string;
    OrigTime?: Date;
    Subject: string;
    EncodedSubjectLen?: number;
    EncodedSubject?: Buffer;
    RoutingGrp?: IRoutingGrp[];
    InstrmtGrp?: IInstrmtGrp[];
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    OrderID?: string;
    ClOrdID?: string;
    LinesOfTextGrp: ILinesOfTextGrp[];
    RawDataLength?: number;
    RawData?: Buffer;
    StandardTrailer: IStandardTrailer;
}
