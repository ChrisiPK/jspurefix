import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { ISecListGrp } from './set/sec_list_grp';
export interface ISecurityList {
    SecurityReportID?: number;
    ClearingBusinessDate?: Date;
    SecurityListID?: string;
    SecurityListRefID?: string;
    SecurityListDesc?: string;
    SecurityListType?: number;
    SecurityListTypeSource?: number;
    SecurityReqID?: string;
    SecurityResponseID?: string;
    SecurityRequestResult?: number;
    SecurityRejectReason?: number;
    TransactTime?: Date;
    TotNoRelatedSym?: number;
    MarketID?: string;
    MarketSegmentID?: string;
    LastFragment?: boolean;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    SecListGrp?: ISecListGrp[];
}
