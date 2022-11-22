import { FixParser } from '../dictionary';
import { FixDefinitions } from '../dictionary/definition';
import { GetJsFixLogger } from '../config';
import { IDictionaryPath } from './dictionary-path';
export declare class DefinitionFactory {
    getDictPath(p: string): IDictionaryPath;
    getDefinitions(path: string, getLogger?: GetJsFixLogger): Promise<FixDefinitions>;
    getParser(path: string, getLogger: GetJsFixLogger): FixParser;
    norm(p: string): string;
}
