/// <reference types="node" />
export interface IUnderlyingEvntGrp {
    UnderlyingEventType?: number;
    UnderlyingEventDate?: Date;
    UnderlyingEventTime?: Date;
    UnderlyingEventTimeUnit?: string;
    UnderlyingEventTimePeriod?: number;
    UnderlyingEventMonthYear?: string;
    UnderlyingEventPx?: number;
    UnderlyingEventText?: string;
    EncodedUnderlyingEventTextLen?: number;
    EncodedUnderlyingEventText?: Buffer;
}
