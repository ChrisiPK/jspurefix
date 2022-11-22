import { IUnderlyingDividendPeriodBusinessCenterGrp } from './underlying_dividend_period_business_center_grp';
export interface IUnderlyingDividendPeriodGrp {
    UnderlyingDividendPeriodSequence?: number;
    UnderlyingDividendPeriodStartDateUnadjusted?: Date;
    UnderlyingDividendPeriodEndDateUnadjusted?: Date;
    UnderlyingDividendPeriodUnderlierRefID?: string;
    UnderlyingDividendPeriodStrikePrice?: number;
    UnderlyingDividendPeriodBusinessDayConvention?: number;
    UnderlyingDividendPeriodValuationDateUnadjusted?: Date;
    UnderlyingDividendPeriodValuationDateRelativeTo?: number;
    UnderlyingDividendPeriodValuationDateOffsetPeriod?: number;
    UnderlyingDividendPeriodValuationDateOffsetUnit?: string;
    UnderlyingDividendPeriodValuationDateOffsetDayType?: number;
    UnderlyingDividendPeriodValuationDateAdjusted?: Date;
    UnderlyingDividendPeriodPaymentDateUnadjusted?: Date;
    UnderlyingDividendPeriodPaymentDateRelativeTo?: number;
    UnderlyingDividendPeriodPaymentDateOffsetPeriod?: number;
    UnderlyingDividendPeriodPaymentDateOffsetUnit?: string;
    UnderlyingDividendPeriodPaymentDateOffsetDayType?: number;
    UnderlyingDividendPeriodPaymentDateAdjusted?: Date;
    UnderlyingDividendPeriodXID?: string;
    UnderlyingDividendPeriodBusinessCenterGrp?: IUnderlyingDividendPeriodBusinessCenterGrp[];
}
