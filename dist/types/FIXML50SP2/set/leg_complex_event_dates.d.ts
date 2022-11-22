import { ILegComplexEventTimes } from './leg_complex_event_times';
export interface ILegComplexEventDates {
    LegComplexEventStartDate?: Date;
    LegComplexEventEndDate?: Date;
    LegComplexEventTimes?: ILegComplexEventTimes[];
}
