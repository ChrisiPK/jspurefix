import { IDeliveryScheduleSettlDayGrp } from './delivery_schedule_settl_day_grp';
export interface IDeliveryScheduleGrp {
    DeliveryScheduleType?: number;
    DeliveryScheduleXID?: string;
    DeliveryScheduleNotional?: number;
    DeliveryScheduleNotionalUnitOfMeasure?: string;
    DeliveryScheduleNotionalCommodityFrequency?: number;
    DeliveryScheduleNegativeTolerance?: number;
    DeliverySchedulePositiveTolerance?: number;
    DeliveryScheduleToleranceUnitOfMeasure?: string;
    DeliveryScheduleToleranceType?: number;
    DeliveryScheduleSettlCountry?: string;
    DeliveryScheduleSettlTimeZone?: string;
    DeliveryScheduleSettlFlowType?: number;
    DeliveryScheduleSettlHolidaysProcessingInstruction?: number;
    DeliveryScheduleSettlDayGrp?: IDeliveryScheduleSettlDayGrp[];
}
