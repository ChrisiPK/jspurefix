import { IUnderlyingComplexEventTimes } from './underlying_complex_event_times';
export interface IUnderlyingComplexEventDates {
    UnderlyingComplexEventStartDate?: Date;
    UnderlyingComplexEventEndDate?: Date;
    UnderlyingComplexEventTimes?: IUnderlyingComplexEventTimes[];
}
