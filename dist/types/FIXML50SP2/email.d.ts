/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IRoutingGrp } from './set/routing_grp';
import { IInstrmtGrp } from './set/instrmt_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { ILinesOfTextGrp } from './set/lines_of_text_grp';
import { IAttachmentGrp } from './set/attachment_grp';
export interface IEmail {
    EmailThreadID: string;
    EmailType: string;
    OrigTime?: Date;
    Subject: string;
    EncodedSubjectLen?: number;
    EncodedSubject?: Buffer;
    OrderID?: string;
    ClOrdID?: string;
    RawDataLength?: number;
    RawData?: Buffer;
    StandardHeader?: IStandardHeader;
    RoutingGrp?: IRoutingGrp[];
    InstrmtGrp?: IInstrmtGrp[];
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    LinesOfTextGrp?: ILinesOfTextGrp[];
    AttachmentGrp?: IAttachmentGrp[];
}
