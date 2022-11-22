import { IUnderlyingPricingDateBusinessCenterGrp } from './underlying_pricing_date_business_center_grp';
export interface IUnderlyingPricingDateTime {
    UnderlyingPricingDateUnadjusted?: Date;
    UnderlyingPricingDateBusinessDayConvention?: number;
    UnderlyingPricingDateAdjusted?: Date;
    UnderlyingPricingTime?: string;
    UnderlyingPricingTimeBusinessCenter?: string;
    UnderlyingPricingDateBusinessCenterGrp?: IUnderlyingPricingDateBusinessCenterGrp[];
}
