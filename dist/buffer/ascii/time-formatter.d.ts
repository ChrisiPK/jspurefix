import { ElasticBuffer } from '../elastic-buffer';
import { ITimeFormatter } from './itime-formatter';
export declare class TimeFormatter implements ITimeFormatter {
    readonly buffer: ElasticBuffer;
    readonly adjustLocal: boolean;
    constructor(buffer: ElasticBuffer, adjustLocal?: boolean);
    writeLocalDate(v: Date): void;
    writeUtcDate(v: Date): void;
    writeUtcTimestamp(v: Date): void;
    writeLocalTimestamp(v: Date): void;
    writeUtcTime(v: Date): void;
    writeLocalTime(v: Date): void;
    getLocalTime(start: number): Date;
    getUtcTime(start: number): Date;
    getUtcDate(start: number): Date;
    getLocalDate(start: number): Date;
    getUtcTimestamp(start: number, end: number): Date;
    getLocalTimestamp(start: number, end: number): Date;
    private getTimestamp;
    private getTime;
    private getDate;
}
