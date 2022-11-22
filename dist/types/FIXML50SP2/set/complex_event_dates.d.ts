import { IComplexEventTimes } from './complex_event_times';
export interface IComplexEventDates {
    ComplexEventStartDate?: Date;
    ComplexEventEndDate?: Date;
    ComplexEventTimes?: IComplexEventTimes[];
}
