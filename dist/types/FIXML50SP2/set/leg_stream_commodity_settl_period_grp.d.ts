import { ILegStreamCommoditySettlDayGrp } from './leg_stream_commodity_settl_day_grp';
export interface ILegStreamCommoditySettlPeriodGrp {
    LegStreamCommoditySettlCountry?: string;
    LegStreamCommoditySettlTimeZone?: string;
    LegStreamCommoditySettlFlowType?: number;
    LegStreamCommoditySettlPeriodNotional?: number;
    LegStreamCommoditySettlPeriodNotionalUnitOfMeasure?: string;
    LegStreamCommoditySettlPeriodFrequencyPeriod?: number;
    LegStreamCommoditySettlPeriodFrequencyUnit?: string;
    LegStreamCommoditySettlPeriodPrice?: number;
    LegStreamCommoditySettlPeriodPriceUnitOfMeasure?: string;
    LegStreamCommoditySettlPeriodPriceCurrency?: string;
    LegStreamCommoditySettlHolidaysProcessingInstruction?: number;
    LegStreamCommoditySettlPeriodXID?: string;
    LegStreamCommoditySettlPeriodXIDRef?: string;
    LegStreamCommoditySettlDayGrp?: ILegStreamCommoditySettlDayGrp[];
}
