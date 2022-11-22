import { IStreamCommoditySettlDayGrp } from './stream_commodity_settl_day_grp';
export interface IStreamCommoditySettlPeriodGrp {
    StreamCommoditySettlCountry?: string;
    StreamCommoditySettlTimeZone?: string;
    StreamCommoditySettlFlowType?: number;
    StreamCommoditySettlPeriodNotional?: number;
    StreamCommoditySettlPeriodNotionalUnitOfMeasure?: string;
    StreamCommoditySettlPeriodFrequencyPeriod?: number;
    StreamCommoditySettlPeriodFrequencyUnit?: string;
    StreamCommoditySettlPeriodPrice?: number;
    StreamCommoditySettlPeriodPriceUnitOfMeasure?: string;
    StreamCommoditySettlPeriodPriceCurrency?: string;
    StreamCommoditySettlHolidaysProcessingInstruction?: number;
    StreamCommoditySettlPeriodXID?: string;
    StreamCommoditySettlPeriodXIDRef?: string;
    StreamCommoditySettlDayGrp?: IStreamCommoditySettlDayGrp[];
}
