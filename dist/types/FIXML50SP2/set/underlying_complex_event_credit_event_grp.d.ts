import { IUnderlyingComplexEventCreditEventQualifierGrp } from './underlying_complex_event_credit_event_qualifier_grp';
export interface IUnderlyingComplexEventCreditEventGrp {
    UnderlyingComplexEventCreditEventType?: string;
    UnderlyingComplexEventCreditEventValue?: string;
    UnderlyingComplexEventCreditEventCurrency?: string;
    UnderlyingComplexEventCreditEventPeriod?: number;
    UnderlyingComplexEventCreditEventUnit?: string;
    UnderlyingComplexEventCreditEventDayType?: number;
    UnderlyingComplexEventCreditEventRateSource?: number;
    UnderlyingComplexEventCreditEventQualifierGrp?: IUnderlyingComplexEventCreditEventQualifierGrp[];
}
