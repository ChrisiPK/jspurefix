import { FixDefinitions } from '../../definition';
import { Repository } from './repository';
import { FixParser } from '../../fix-parser';
import { GetJsFixLogger } from '../../../config';
export declare class RepositoryXmlParser extends FixParser {
    readonly rootPath: string;
    readonly getLogger: GetJsFixLogger;
    readonly repository: Repository;
    private readonly singlePass;
    private readonly logger;
    constructor(rootPath: string, getLogger: GetJsFixLogger);
    private static subscribe;
    parse(): Promise<FixDefinitions>;
    private onePass;
}
