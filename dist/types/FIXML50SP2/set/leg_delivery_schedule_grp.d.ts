import { ILegDeliveryScheduleSettlDayGrp } from './leg_delivery_schedule_settl_day_grp';
export interface ILegDeliveryScheduleGrp {
    LegDeliveryScheduleType?: number;
    LegDeliveryScheduleXID?: string;
    LegDeliveryScheduleNotional?: number;
    LegDeliveryScheduleNotionalUnitOfMeasure?: string;
    LegDeliveryScheduleNotionalCommodityFrequency?: number;
    LegDeliveryScheduleNegativeTolerance?: number;
    LegDeliverySchedulePositiveTolerance?: number;
    LegDeliveryScheduleToleranceUnitOfMeasure?: string;
    LegDeliveryScheduleToleranceType?: number;
    LegDeliveryScheduleSettlCountry?: string;
    LegDeliveryScheduleSettlTimeZone?: string;
    LegDeliveryScheduleSettlFlowType?: number;
    LegDeliveryScheduleSettlHolidaysProcessingInstruction?: number;
    LegDeliveryScheduleSettlDayGrp?: ILegDeliveryScheduleSettlDayGrp[];
}
