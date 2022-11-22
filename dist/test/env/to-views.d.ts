import { MsgView } from '../../buffer';
import { FixDefinitions } from '../../dictionary/definition';
export declare class ToViews {
    readonly testFolder: string;
    definitions: FixDefinitions;
    readonly views: MsgView[];
    batch: MsgView;
    private readonly root;
    constructor(testFolder: string);
    load(file?: string): Promise<any>;
}
