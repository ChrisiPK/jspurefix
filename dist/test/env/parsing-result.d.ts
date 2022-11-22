import { MsgView } from '../../buffer';
import { AsciiParser } from '../../buffer/ascii';
export declare class ParsingResult {
    readonly event: string;
    readonly msgType: string;
    readonly view: MsgView;
    readonly contents: string;
    readonly parser: AsciiParser;
    constructor(event: string, msgType: string, view: MsgView, contents: string, parser: AsciiParser);
}
