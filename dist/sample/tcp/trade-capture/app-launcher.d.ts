import { EngineFactory, SessionLauncher } from '../../../runtime';
import { IJsFixConfig } from '../../../config';
export declare class AppLauncher extends SessionLauncher {
    constructor(client?: string, server?: string);
    protected makeFactory(config: IJsFixConfig): EngineFactory;
}
