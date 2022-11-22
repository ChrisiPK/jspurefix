import { FixDefinitions } from '../../definition';
import { FixParser } from '../../fix-parser';
import { GetJsFixLogger } from '../../../config';
export declare class FixXsdParser extends FixParser {
    readonly rootPath: string;
    getLogger: GetJsFixLogger;
    readonly definitions: FixDefinitions;
    private readonly logger;
    constructor(rootPath: string, getLogger: GetJsFixLogger);
    parse(): Promise<FixDefinitions>;
}
