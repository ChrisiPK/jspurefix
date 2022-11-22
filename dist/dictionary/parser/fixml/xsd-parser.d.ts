import { FixDefinitions } from '../../definition';
import { ILooseObject } from '../../../collections/collection';
import { ISaxNode } from '../../sax-node';
export declare abstract class XsdParser {
    readonly definitions: FixDefinitions;
    readonly data: ILooseObject[];
    current: ILooseObject;
    protected pending: string;
    protected constructor(definitions: FixDefinitions);
    parse(file: string): Promise<FixDefinitions>;
    abstract close(line: number, node: string): void;
    abstract open(line: number, node: ISaxNode): void;
    abstract value(line: number, n: string, v: string): void;
    protected assign(node: ISaxNode, target?: ILooseObject): void;
}
