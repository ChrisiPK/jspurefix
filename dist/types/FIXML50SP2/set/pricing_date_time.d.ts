import { IPricingDateBusinessCenterGrp } from './pricing_date_business_center_grp';
export interface IPricingDateTime {
    PricingDateUnadjusted?: Date;
    PricingDateBusinessDayConvention?: number;
    PricingDateAdjusted?: Date;
    PricingTime?: string;
    PricingTimeBusinessCenter?: string;
    PricingDateBusinessCenterGrp?: IPricingDateBusinessCenterGrp[];
}
