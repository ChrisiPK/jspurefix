import { ILooseObject } from '../../../collections/collection';
import { ISaxNode } from '../../sax-node';
export declare abstract class BaseParser {
    readonly name: string;
    data: ILooseObject[];
    current: ILooseObject;
    protected constructor(name: string);
    value(line: number, n: string, v: string): void;
    close(line: number, node: string): void;
    open(line: number, node: ISaxNode): void;
}
