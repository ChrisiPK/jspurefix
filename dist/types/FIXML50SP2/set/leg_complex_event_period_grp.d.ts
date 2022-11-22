import { ILegComplexEventScheduleGrp } from './leg_complex_event_schedule_grp';
import { ILegComplexEventPeriodDateGrp } from './leg_complex_event_period_date_grp';
import { ILegComplexEventAveragingObservationGrp } from './leg_complex_event_averaging_observation_grp';
export interface ILegComplexEventPeriodGrp {
    LegComplexEventPeriodType?: number;
    LegComplexEventBusinessCenter?: string;
    LegComplexEventScheduleGrp?: ILegComplexEventScheduleGrp[];
    LegComplexEventPeriodDateGrp?: ILegComplexEventPeriodDateGrp[];
    LegComplexEventAveragingObservationGrp?: ILegComplexEventAveragingObservationGrp[];
}
