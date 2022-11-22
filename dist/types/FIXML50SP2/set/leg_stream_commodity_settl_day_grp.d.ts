import { ILegStreamCommoditySettlTimeGrp } from './leg_stream_commodity_settl_time_grp';
export interface ILegStreamCommoditySettlDayGrp {
    LegStreamCommoditySettlDay?: number;
    LegStreamCommoditySettlTotalHours?: number;
    LegStreamCommoditySettlTimeGrp?: ILegStreamCommoditySettlTimeGrp[];
}
