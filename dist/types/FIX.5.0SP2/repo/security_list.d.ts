/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { ISecListGrp } from './set/sec_list_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityList {
    StandardHeader: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    SecurityReportID?: number;
    ClearingBusinessDate?: Date;
    SecurityReqID?: string;
    SecurityResponseID?: string;
    SecurityRequestResult?: number;
    TotNoRelatedSym?: number;
    MarketID?: string;
    MarketSegmentID?: string;
    LastFragment?: boolean;
    SecListGrp?: ISecListGrp[];
    StandardTrailer: IStandardTrailer;
    SecurityListID?: string;
    SecurityListRefID?: string;
    SecurityListDesc?: string;
    EncodedSecurityListDescLen?: number;
    EncodedSecurityListDesc?: Buffer;
    SecurityListType?: number;
    SecurityListTypeSource?: number;
    TransactTime?: Date;
}
