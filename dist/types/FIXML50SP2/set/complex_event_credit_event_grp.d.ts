import { IComplexEventCreditEventQualifierGrp } from './complex_event_credit_event_qualifier_grp';
export interface IComplexEventCreditEventGrp {
    ComplexEventCreditEventType?: string;
    ComplexEventCreditEventValue?: string;
    ComplexEventCreditEventCurrency?: string;
    ComplexEventCreditEventPeriod?: number;
    ComplexEventCreditEventUnit?: string;
    ComplexEventCreditEventDayType?: number;
    ComplexEventCreditEventRateSource?: number;
    ComplexEventCreditEventQualifierGrp?: IComplexEventCreditEventQualifierGrp[];
}
