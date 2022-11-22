import { ILegDeliveryScheduleSettlTimeGrp } from './leg_delivery_schedule_settl_time_grp';
export interface ILegDeliveryScheduleSettlDayGrp {
    LegDeliveryScheduleSettlDay?: number;
    LegDeliveryScheduleSettlTotalHours?: number;
    LegDeliveryScheduleSettlTimeGrp?: ILegDeliveryScheduleSettlTimeGrp[];
}
