import { IJsFixConfig } from '../../../config';
import { FixEntity } from '../../../transport';
export declare class RespawnAcceptor extends FixEntity {
    readonly config: IJsFixConfig;
    private readonly logger;
    constructor(config: IJsFixConfig);
    start(): Promise<any>;
    waitFor(respawns?: number): Promise<any>;
}
