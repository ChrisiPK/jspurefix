import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
export interface IMarketDataReport {
    MDReportID?: number;
    MDReportEvent: number;
    MDReportCount: number;
    TransactTime?: Date;
    TotNumReports?: number;
    TotNoMarketSegmentReports?: number;
    TotNoInstrumentReports?: number;
    TotNoPartyDetailReports?: number;
    TotNoEntitlementReports?: number;
    TotNoRiskLimitReports?: number;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
}
