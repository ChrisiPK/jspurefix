/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplIDReportGrp } from './set/appl_id_report_grp';
export interface IApplicationMessageReport {
    ApplReportID: string;
    ApplReqID?: string;
    ApplReportType: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    ApplIDReportGrp?: IApplIDReportGrp[];
}
