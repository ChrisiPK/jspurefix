import { ILegDividendPeriodBusinessCenterGrp } from './leg_dividend_period_business_center_grp';
export interface ILegDividendPeriodGrp {
    LegDividendPeriodSequence?: number;
    LegDividendPeriodStartDateUnadjusted?: Date;
    LegDividendPeriodEndDateUnadjusted?: Date;
    LegDividendPeriodUnderlierRefID?: string;
    LegDividendPeriodStrikePrice?: number;
    LegDividendPeriodBusinessDayConvention?: number;
    LegDividendPeriodValuationDateUnadjusted?: Date;
    LegDividendPeriodValuationDateRelativeTo?: number;
    LegDividendPeriodValuationDateOffsetPeriod?: number;
    LegDividendPeriodValuationDateOffsetUnit?: string;
    LegDividendPeriodValuationDateOffsetDayType?: number;
    LegDividendPeriodValuationDateAdjusted?: Date;
    LegDividendPeriodPaymentDateUnadjusted?: Date;
    LegDividendPeriodPaymentDateRelativeTo?: number;
    LegDividendPeriodPaymentDateOffsetPeriod?: number;
    LegDividendPeriodPaymentDateOffsetUnit?: string;
    LegDividendPeriodPaymentDateOffsetDayType?: number;
    LegDividendPeriodPaymentDateAdjusted?: Date;
    LegDividendPeriodXID?: string;
    LegDividendPeriodBusinessCenterGrp?: ILegDividendPeriodBusinessCenterGrp[];
}
