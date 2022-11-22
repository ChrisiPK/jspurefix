import { MsgView } from '../msg-view';
import { SimpleFieldDefinition } from '../../dictionary/definition';
import { Structure } from '../structure';
import { SegmentDescription } from '../segment/segment-description';
export declare class FixmlView extends MsgView {
    readonly segment: SegmentDescription;
    readonly values: string[];
    readonly structure: Structure;
    constructor(segment: SegmentDescription, values: string[], structure: Structure);
    private static getTimestamp;
    private static getTimeOnly;
    private static getDateOnly;
    clone(): MsgView;
    checksum(): number;
    protected create(singleton: SegmentDescription): FixmlView;
    protected stringAtPosition(position: number): string;
    protected toTyped(field: SimpleFieldDefinition): any;
}
