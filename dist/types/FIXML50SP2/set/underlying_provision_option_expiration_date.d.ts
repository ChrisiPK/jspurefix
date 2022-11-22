import { IUnderlyingProvisionOptionExpirationDateBusinessCenterGrp } from './underlying_provision_option_expiration_date_business_center_grp';
export interface IUnderlyingProvisionOptionExpirationDate {
    UnderlyingProvisionOptionExpirationDateUnadjusted?: Date;
    UnderlyingProvisionOptionExpirationDateBusinessDayConvention?: number;
    UnderlyingProvisionOptionExpirationDateRelativeTo?: number;
    UnderlyingProvisionOptionExpirationDateOffsetPeriod?: number;
    UnderlyingProvisionOptionExpirationDateOffsetUnit?: string;
    UnderlyingProvisionOptionExpirationDateOffsetDayType?: number;
    UnderlyingProvisionOptionExpirationDateAdjusted?: Date;
    UnderlyingProvisionOptionExpirationTime?: string;
    UnderlyingProvisionOptionExpirationTimeBusinessCenter?: string;
    UnderlyingProvisionOptionExpirationDateBusinessCenterGrp?: IUnderlyingProvisionOptionExpirationDateBusinessCenterGrp[];
}
