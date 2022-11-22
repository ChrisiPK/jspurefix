import { IProtectionTermEventQualifierGrp } from './protection_term_event_qualifier_grp';
export interface IProtectionTermEventGrp {
    ProtectionTermEventType?: string;
    ProtectionTermEventValue?: string;
    ProtectionTermEventCurrency?: string;
    ProtectionTermEventPeriod?: number;
    ProtectionTermEventUnit?: string;
    ProtectionTermEventDayType?: number;
    ProtectionTermEventRateSource?: string;
    ProtectionTermEventQualifierGrp?: IProtectionTermEventQualifierGrp[];
}
