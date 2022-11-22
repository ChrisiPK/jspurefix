import { SegmentDescription } from './segment-description';
export declare class SegmentSummary {
    readonly name: string;
    readonly depth: number;
    readonly startTag: number;
    readonly startPosition: number;
    readonly endTag: number;
    readonly endPosition: number;
    readonly delimiterTag: number;
    readonly delimiterPositions: number[];
    constructor(name: string, depth: number, startTag: number, startPosition: number, endTag: number, endPosition: number, delimiterTag: number, delimiterPositions: number[]);
    static fromDescription(d: SegmentDescription): SegmentSummary;
}
