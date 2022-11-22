import { ILegComplexEventCreditEventQualifierGrp } from './leg_complex_event_credit_event_qualifier_grp';
export interface ILegComplexEventCreditEventGrp {
    LegComplexEventCreditEventType?: string;
    LegComplexEventCreditEventValue?: string;
    LegComplexEventCreditEventCurrency?: string;
    LegComplexEventCreditEventPeriod?: number;
    LegComplexEventCreditEventUnit?: string;
    LegComplexEventCreditEventDayType?: number;
    LegComplexEventCreditEventRateSource?: number;
    LegComplexEventCreditEventQualifierGrp?: ILegComplexEventCreditEventQualifierGrp[];
}
