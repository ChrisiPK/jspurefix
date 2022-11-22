import { IDividendPeriodBusinessCenterGrp } from './dividend_period_business_center_grp';
export interface IDividendPeriodGrp {
    DividendPeriodSequence?: number;
    DividendPeriodStartDateUnadjusted?: Date;
    DividendPeriodEndDateUnadjusted?: Date;
    DividendPeriodUnderlierRefID?: string;
    DividendPeriodStrikePrice?: number;
    DividendPeriodBusinessDayConvention?: number;
    DividendPeriodValuationDateUnadjusted?: Date;
    DividendPeriodValuationDateRelativeTo?: number;
    DividendPeriodValuationDateOffsetPeriod?: number;
    DividendPeriodValuationDateOffsetUnit?: string;
    DividendPeriodValuationDateOffsetDayType?: number;
    DividendPeriodValuationDateAdjusted?: Date;
    DividendPeriodPaymentDateUnadjusted?: Date;
    DividendPeriodPaymentDateRelativeTo?: number;
    DividendPeriodPaymentDateOffsetPeriod?: number;
    DividendPeriodPaymentDateOffsetUnit?: string;
    DividendPeriodPaymentDateOffsetDayType?: number;
    DividendPeriodPaymentDateAdjusted?: Date;
    DividendPeriodXID?: string;
    DividendPeriodBusinessCenterGrp?: IDividendPeriodBusinessCenterGrp[];
}
