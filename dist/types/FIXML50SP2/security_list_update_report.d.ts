import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { ISecLstUpdRelSymGrp } from './set/sec_lst_upd_rel_sym_grp';
export interface ISecurityListUpdateReport {
    SecurityReportID?: number;
    SecurityListID?: string;
    SecurityListRefID?: string;
    SecurityListDesc?: string;
    SecurityListType?: number;
    SecurityListTypeSource?: number;
    SecurityReqID?: string;
    SecurityResponseID?: string;
    SecurityRequestResult?: number;
    TotNoRelatedSym?: number;
    ClearingBusinessDate?: Date;
    SecurityUpdateAction?: string;
    CorporateAction?: string;
    MarketID?: string;
    MarketSegmentID?: string;
    TransactTime?: Date;
    LastFragment?: boolean;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    SecLstUpdRelSymGrp?: ISecLstUpdRelSymGrp[];
}
