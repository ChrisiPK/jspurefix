import { IDeliveryScheduleSettlTimeGrp } from './delivery_schedule_settl_time_grp';
export interface IDeliveryScheduleSettlDayGrp {
    DeliveryScheduleSettlDay?: number;
    DeliveryScheduleSettlTotalHours?: number;
    DeliveryScheduleSettlTimeGrp?: IDeliveryScheduleSettlTimeGrp[];
}
