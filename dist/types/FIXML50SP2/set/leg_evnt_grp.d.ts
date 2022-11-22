/// <reference types="node" />
export interface ILegEvntGrp {
    LegEventType?: number;
    LegEventDate?: Date;
    LegEventTime?: Date;
    LegEventTimeUnit?: string;
    LegEventTimePeriod?: number;
    LegEventMonthYear?: string;
    LegEventPx?: number;
    LegEventText?: string;
    EncodedLegEventTextLen?: number;
    EncodedLegEventText?: Buffer;
}
