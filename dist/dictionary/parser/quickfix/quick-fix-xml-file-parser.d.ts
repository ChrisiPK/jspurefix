import { FixDefinitions } from '../../definition';
import { FixParser } from '../../fix-parser';
import { GetJsFixLogger } from '../../../config';
import { ParseState } from './parse-state';
export declare class QuickFixXmlFileParser extends FixParser {
    readonly xmlPath: string;
    getLogger: GetJsFixLogger;
    parseState: ParseState;
    numberPasses: number;
    definitions: FixDefinitions;
    private readonly singlePass;
    constructor(xmlPath: string, getLogger: GetJsFixLogger);
    private static subscribe;
    private encloseMessages;
    parse(): Promise<FixDefinitions>;
    private onePass;
}
