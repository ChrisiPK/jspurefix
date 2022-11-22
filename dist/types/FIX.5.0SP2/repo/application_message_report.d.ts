/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplIDReportGrp } from './set/appl_id_report_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IApplicationMessageReport {
    StandardHeader: IStandardHeader;
    ApplReportID: string;
    ApplReportType: number;
    ApplIDReportGrp?: IApplIDReportGrp[];
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
    ApplReqID?: string;
}
