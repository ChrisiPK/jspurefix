/// <reference types="node" />
export interface IEvntGrp {
    EventType?: number;
    EventDate?: Date;
    EventTime?: Date;
    EventTimeUnit?: string;
    EventTimePeriod?: number;
    EventMonthYear?: string;
    EventPx?: number;
    EventText?: string;
    EncodedEventTextLen?: number;
    EncodedEventText?: Buffer;
}
