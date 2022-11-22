import { IUnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp } from './underlying_provision_option_relevant_underlying_date_business_center_grp';
export interface IUnderlyingProvisionOptionRelevantUnderlyingDate {
    UnderlyingProvisionOptionRelevantUnderlyingDateUnadjusted?: Date;
    UnderlyingProvisionOptionRelevantUnderlyingDateBusinessDayConvention?: number;
    UnderlyingProvisionOptionRelevantUnderlyingDateRelativeTo?: number;
    UnderlyingProvisionOptionRelevantUnderlyingDateOffsetPeriod?: number;
    UnderlyingProvisionOptionRelevantUnderlyingDateOffsetUnit?: string;
    UnderlyingProvisionOptionRelevantUnderlyingDateOffsetDayType?: number;
    UnderlyingProvisionOptionRelevantUnderlyingDateAdjusted?: Date;
    UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp?: IUnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp[];
}
