import { IUnderlyingDeliveryScheduleSettlDayGrp } from './underlying_delivery_schedule_settl_day_grp';
export interface IUnderlyingDeliveryScheduleGrp {
    UnderlyingDeliveryScheduleType?: number;
    UnderlyingDeliveryScheduleXID?: string;
    UnderlyingDeliveryScheduleNotional?: number;
    UnderlyingDeliveryScheduleNotionalUnitOfMeasure?: string;
    UnderlyingDeliveryScheduleNotionalCommodityFrequency?: number;
    UnderlyingDeliveryScheduleNegativeTolerance?: number;
    UnderlyingDeliverySchedulePositiveTolerance?: number;
    UnderlyingDeliveryScheduleToleranceUnitOfMeasure?: string;
    UnderlyingDeliveryScheduleToleranceType?: number;
    UnderlyingDeliveryScheduleSettlCountry?: string;
    UnderlyingDeliveryScheduleSettlTimeZone?: string;
    UnderlyingDeliveryScheduleSettlFlowType?: number;
    UnderlyingDeliveryScheduleSettlHolidaysProcessingInstruction?: number;
    UnderlyingDeliveryScheduleSettlDayGrp?: IUnderlyingDeliveryScheduleSettlDayGrp[];
}
