import { IStreamCommoditySettlTimeGrp } from './stream_commodity_settl_time_grp';
export interface IStreamCommoditySettlDayGrp {
    StreamCommoditySettlDay?: number;
    StreamCommoditySettlTotalHours?: number;
    StreamCommoditySettlTimeGrp?: IStreamCommoditySettlTimeGrp[];
}
