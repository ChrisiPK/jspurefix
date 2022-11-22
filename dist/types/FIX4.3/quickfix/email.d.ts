/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IEmailNoRoutingIDs } from './set/email_no_routing_i_ds';
import { IEmailNoRelatedSym } from './set/email_no_related_sym';
import { IEmailLinesOfText } from './set/email_lines_of_text';
import { IStandardTrailer } from './set/standard_trailer';
export interface IEmail {
    StandardHeader: IStandardHeader;
    EmailThreadID: string;
    EmailType: string;
    OrigTime?: Date;
    Subject: string;
    EncodedSubjectLen?: number;
    EncodedSubject?: Buffer;
    NoRoutingIDs?: IEmailNoRoutingIDs[];
    NoRelatedSym?: IEmailNoRelatedSym[];
    OrderID?: string;
    ClOrdID?: string;
    LinesOfText: IEmailLinesOfText[];
    RawDataLength?: number;
    RawData?: Buffer;
    StandardTrailer: IStandardTrailer;
}
