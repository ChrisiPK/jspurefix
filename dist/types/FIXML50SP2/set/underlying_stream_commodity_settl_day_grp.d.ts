import { IUnderlyingStreamCommoditySettlTimeGrp } from './underlying_stream_commodity_settl_time_grp';
export interface IUnderlyingStreamCommoditySettlDayGrp {
    UnderlyingStreamCommoditySettlDay?: number;
    UnderlyingStreamCommoditySettlTotalHours?: number;
    UnderlyingStreamCommoditySettlTimeGrp?: IUnderlyingStreamCommoditySettlTimeGrp[];
}
