import { FixDefinitions } from '../../definition';
import { ParseContext } from './parse-context';
import { ISaxNode } from '../../sax-node';
export declare abstract class NodeParser {
    readonly definitions: FixDefinitions;
    passes: number;
    protected readonly parseContexts: ParseContext[];
    protected constructor(definitions: FixDefinitions, passes: number);
    abstract open(line: number, node: ISaxNode): void;
    abstract close(line: number, node: string): void;
    protected addSimple(node: ISaxNode): void;
    protected addComponentField(componentName: string, node: ISaxNode): void;
    protected addGroupField(name: string): void;
    protected beginGroupDefinition(node: ISaxNode): void;
    private peek;
}
