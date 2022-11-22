import { ILegProvisionOptionExpirationDateBusinessCenterGrp } from './leg_provision_option_expiration_date_business_center_grp';
export interface ILegProvisionOptionExpirationDate {
    LegProvisionOptionExpirationDateUnadjusted?: Date;
    LegProvisionOptionExpirationDateBusinessDayConvention?: number;
    LegProvisionOptionExpirationDateRelativeTo?: number;
    LegProvisionOptionExpirationDateOffsetPeriod?: number;
    LegProvisionOptionExpirationDateOffsetUnit?: string;
    LegProvisionOptionExpirationDateOffsetDayType?: number;
    LegProvisionOptionExpirationDateAdjusted?: Date;
    LegProvisionOptionExpirationTime?: string;
    LegProvisionOptionExpirationTimeBusinessCenter?: string;
    LegProvisionOptionExpirationDateBusinessCenterGrp?: ILegProvisionOptionExpirationDateBusinessCenterGrp[];
}
