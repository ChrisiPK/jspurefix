import { ILegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp } from './leg_provision_option_relevant_underlying_date_business_center_grp';
export interface ILegProvisionOptionRelevantUnderlyingDate {
    LegProvisionOptionRelevantUnderlyingDateUnadjusted?: Date;
    LegProvisionOptionRelevantUnderlyingDateBusinessDayConvention?: number;
    LegProvisionOptionRelevantUnderlyingDateRelativeTo?: number;
    LegProvisionOptionRelevantUnderlyingDateOffsetPeriod?: number;
    LegProvisionOptionRelevantUnderlyingDateOffsetUnit?: string;
    LegProvisionOptionRelevantUnderlyingDateOffsetDayType?: number;
    LegProvisionOptionRelevantUnderlyingDateAdjusted?: Date;
    LegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp?: ILegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp[];
}
