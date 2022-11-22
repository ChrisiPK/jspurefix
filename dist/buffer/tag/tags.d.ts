import { FixDefinitions } from '../../dictionary/definition';
import { ContainedSimpleField } from '../../dictionary/contained';
import { TagPos } from './tag-pos';
import { TagType } from './tag-type';
export declare class Tags {
    readonly definitions: FixDefinitions;
    readonly startingLength: number;
    static readonly BeginString: number;
    static readonly BodyLengthTag: number;
    static readonly CheckSumTag: number;
    static readonly MsgTag: number;
    tagPos: TagPos[];
    nextTagPos: number;
    constructor(definitions: FixDefinitions, startingLength?: number);
    static toJSType(simple: ContainedSimpleField): string;
    static toType(type: string): TagType;
    clone(): Tags;
    reset(): void;
    store(start: number, len: number, tag: number): void;
    private expand;
}
