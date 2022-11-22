import { IProvisionOptionRelevantUnderlyingDateBusinessCenterGrp } from './provision_option_relevant_underlying_date_business_center_grp';
export interface IProvisionOptionRelevantUnderlyingDate {
    ProvisionOptionRelevantUnderlyingDateUnadjusted?: Date;
    ProvisionOptionRelevantUnderlyingDateBusinessDayConvention?: number;
    ProvisionOptionRelevantUnderlyingDateRelativeTo?: number;
    ProvisionOptionRelevantUnderlyingDateOffsetPeriod?: number;
    ProvisionOptionRelevantUnderlyingDateOffsetUnit?: string;
    ProvisionOptionRelevantUnderlyingDateOffsetDayType?: number;
    ProvisionOptionRelevantUnderlyingDateAdjusted?: Date;
    ProvisionOptionRelevantUnderlyingDateBusinessCenterGrp?: IProvisionOptionRelevantUnderlyingDateBusinessCenterGrp[];
}
