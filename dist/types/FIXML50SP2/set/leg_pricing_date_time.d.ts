import { ILegPricingDateBusinessCenterGrp } from './leg_pricing_date_business_center_grp';
export interface ILegPricingDateTime {
    LegPricingDateUnadjusted?: Date;
    LegPricingDateBusinessDayConvention?: number;
    LegPricingDateAdjusted?: Date;
    LegPricingTime?: string;
    LegPricingTimeBusinessCenter?: string;
    LegPricingDateBusinessCenterGrp?: ILegPricingDateBusinessCenterGrp[];
}
