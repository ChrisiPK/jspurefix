import { ICompilerSettings } from './compiler-settings';
export declare class StandardSnippet {
    readonly settings: ICompilerSettings;
    constructor(settings: ICompilerSettings);
    private static rhsJustify;
    import(name: string, isMsg: boolean, indent: number): string;
    interface(name: string, indent: number): string;
    startBlockComment(indent: number): string;
    endBlockComment(indent: number): string;
    startBlock(indent: number): string;
    endBlock(indent: number): string;
    group(name: string, type: string, required: boolean, indent: number): string;
    component(name: string, required: boolean, indent: number): string;
    simple(name: string, type: string, required: boolean, indent: number): string;
    enum(name: string, indent: number): string;
    enumValue(name: string, val: any, indent: number): string;
    spaces(indent: number): string;
    commentLine(line: string, justify: number): any;
    commentBox(str: string): string;
    private longest;
}
