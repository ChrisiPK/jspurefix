/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IMarginAmount } from './set/margin_amount';
export interface IMarginRequirementReport {
    MarginReqmtRptID: string;
    MarginReqmtInqID?: string;
    MarginReqmtRptType: number;
    TotNumReports?: number;
    LastRptRequested?: boolean;
    UnsolicitedIndicator?: boolean;
    ClearingBusinessDate?: Date;
    SettlSessID?: string;
    SettlSessSubID?: string;
    MarginClass?: string;
    Currency?: string;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    Parties?: IParties[];
    Instrument?: IInstrument;
    MarginAmount?: IMarginAmount[];
}
