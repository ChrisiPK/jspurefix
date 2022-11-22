import { FixDefinitions } from '../../definition';
import { NodeParser } from './node-parser';
import { ISaxNode } from '../../sax-node';
export declare class FieldDefinitionParser extends NodeParser {
    passes: number;
    private currentField;
    constructor(definitions: FixDefinitions, passes: number);
    open(line: number, node: ISaxNode): void;
    close(line: number, name: string): void;
}
