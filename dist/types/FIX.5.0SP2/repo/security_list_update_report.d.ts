/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { ISecLstUpdRelSymGrp } from './set/sec_lst_upd_rel_sym_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityListUpdateReport {
    StandardHeader: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    SecurityReportID?: number;
    SecurityReqID?: string;
    SecurityResponseID?: string;
    SecurityRequestResult?: number;
    TotNoRelatedSym?: number;
    ClearingBusinessDate?: Date;
    SecurityUpdateAction?: string;
    CorporateAction?: string;
    MarketID?: string;
    MarketSegmentID?: string;
    LastFragment?: boolean;
    SecLstUpdRelSymGrp?: ISecLstUpdRelSymGrp[];
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
