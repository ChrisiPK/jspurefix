import { MsgView } from '../buffer';
import { IJsFixConfig } from '../config';
export declare class FileReplayer {
    readonly config: IJsFixConfig;
    constructor(config: IJsFixConfig);
    replayFixFile(replayFile: string): Promise<MsgView[]>;
}
