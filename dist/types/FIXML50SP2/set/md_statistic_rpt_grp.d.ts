import { IMDStatisticParameters } from './md_statistic_parameters';
export interface IMDStatisticRptGrp {
    MDStatisticID?: string;
    MDStatisticTime?: Date;
    MDStatisticStatus?: number;
    MDStatisticValue?: number;
    MDStatisticValueType?: number;
    MDStatisticValueUnit?: number;
    MDStatisticParameters?: IMDStatisticParameters;
}
