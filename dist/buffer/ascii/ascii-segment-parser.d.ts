import { Structure } from '../structure';
import { Tags } from '../tag/tags';
import { FixDefinitions } from '../../dictionary/definition';
export declare class AsciiSegmentParser {
    readonly definitions: FixDefinitions;
    constructor(definitions: FixDefinitions);
    parse(msgType: string, tags: Tags, last: number): Structure;
}
