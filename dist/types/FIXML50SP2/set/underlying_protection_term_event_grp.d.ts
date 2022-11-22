import { IUnderlyingProtectionTermEventQualifierGrp } from './underlying_protection_term_event_qualifier_grp';
export interface IUnderlyingProtectionTermEventGrp {
    UnderlyingProtectionTermEventType?: string;
    UnderlyingProtectionTermEventValue?: string;
    UnderlyingProtectionTermEventCurrency?: string;
    UnderlyingProtectionTermEventPeriod?: number;
    UnderlyingProtectionTermEventUnit?: string;
    UnderlyingProtectionTermEventDayType?: number;
    UnderlyingProtectionTermEventRateSource?: string;
    UnderlyingProtectionTermEventQualifierGrp?: IUnderlyingProtectionTermEventQualifierGrp[];
}
