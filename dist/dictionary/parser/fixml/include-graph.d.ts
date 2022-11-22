export interface IInclude {
    parent: string;
    children: string[];
}
export interface IGraphNode {
    file: string;
    node: number;
    edges: number[];
}
export declare class IncludeGraph {
    readonly root: string;
    readonly main: string;
    private nodes;
    private includes;
    private graph;
    constructor(root: string, main: string);
    build(): Promise<any>;
    resolve(file: string): string[];
    private resolve_nodes;
    private getGraph;
    private assignNodes;
    private scanIncludes;
    private getIncludes;
}
