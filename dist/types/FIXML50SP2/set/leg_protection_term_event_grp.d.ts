import { ILegProtectionTermEventQualifierGrp } from './leg_protection_term_event_qualifier_grp';
export interface ILegProtectionTermEventGrp {
    LegProtectionTermEventType?: string;
    LegProtectionTermEventValue?: string;
    LegProtectionTermEventCurrency?: string;
    LegProtectionTermEventPeriod?: number;
    LegProtectionTermEventUnit?: string;
    LegProtectionTermEventDayType?: number;
    LegProtectionTermEventRateSource?: string;
    LegProtectionTermEventQualifierGrp?: ILegProtectionTermEventQualifierGrp[];
}
