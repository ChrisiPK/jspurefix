import { FixDefinitions, SimpleFieldDefinition } from '../definition';
import { ICompilerSettings } from './compiler-settings';
export declare class EnumCompiler {
    readonly definitions: FixDefinitions;
    readonly settings: ICompilerSettings;
    private readonly buffer;
    private readonly consolidated;
    private readonly snippets;
    constructor(definitions: FixDefinitions, settings: ICompilerSettings);
    private static getIndex;
    generate(asOneFile?: string): Promise<void>;
    oneEnum(field: SimpleFieldDefinition, asOneFile: string): Promise<void>;
    generateEnum(field: SimpleFieldDefinition): string;
    generateTagEnum(name: string): Promise<void>;
    private toDo;
    private writeAsOne;
    private commentBlock;
    private writeFile;
    private getFileName;
    private create;
}
