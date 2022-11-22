import { IComplexEventDates } from './complex_event_dates';
export interface IComplexEvents {
    ComplexEventType?: number;
    ComplexOptPayoutAmount?: number;
    ComplexEventPrice?: number;
    ComplexEventPriceBoundaryMethod?: number;
    ComplexEventPriceBoundaryPrecision?: number;
    ComplexEventPriceTimeType?: number;
    ComplexEventCondition?: number;
    ComplexEventDates?: IComplexEventDates[];
}
