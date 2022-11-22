import { IProvisionOptionExpirationDateBusinessCenterGrp } from './provision_option_expiration_date_business_center_grp';
export interface IProvisionOptionExpirationDate {
    ProvisionOptionExpirationDateUnadjusted?: Date;
    ProvisionOptionExpirationDateBusinessDayConvention?: number;
    ProvisionOptionExpirationDateRelativeTo?: number;
    ProvisionOptionExpirationDateOffsetPeriod?: number;
    ProvisionOptionExpirationDateOffsetUnit?: string;
    ProvisionOptionExpirationDateOffsetDayType?: number;
    ProvisionOptionExpirationDateAdjusted?: Date;
    ProvisionOptionExpirationTime?: string;
    ProvisionOptionExpirationTimeBusinessCenter?: string;
    ProvisionOptionExpirationDateBusinessCenterGrp?: IProvisionOptionExpirationDateBusinessCenterGrp[];
}
