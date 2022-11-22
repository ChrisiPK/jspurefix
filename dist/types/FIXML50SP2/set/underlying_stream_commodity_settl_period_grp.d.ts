import { IUnderlyingStreamCommoditySettlDayGrp } from './underlying_stream_commodity_settl_day_grp';
export interface IUnderlyingStreamCommoditySettlPeriodGrp {
    UnderlyingStreamCommoditySettlCountry?: string;
    UnderlyingStreamCommoditySettlTimeZone?: string;
    UnderlyingStreamCommoditySettlFlowType?: number;
    UnderlyingStreamCommoditySettlPeriodNotional?: number;
    UnderlyingStreamCommoditySettlPeriodNotionalUnitOfMeasure?: string;
    UnderlyingStreamCommoditySettlPeriodFrequencyPeriod?: number;
    UnderlyingStreamCommoditySettlPeriodFrequencyUnit?: string;
    UnderlyingStreamCommoditySettlPeriodPrice?: number;
    UnderlyingStreamCommoditySettlPeriodPriceUnitOfMeasure?: string;
    UnderlyingStreamCommoditySettlPeriodPriceCurrency?: string;
    UnderlyingStreamCommoditySettlHolidaysProcessingInstruction?: number;
    UnderlyingStreamCommoditySettlPeriodXID?: string;
    UnderlyingStreamCommoditySettlPeriodXIDRef?: string;
    UnderlyingStreamCommoditySettlDayGrp?: IUnderlyingStreamCommoditySettlDayGrp[];
}
