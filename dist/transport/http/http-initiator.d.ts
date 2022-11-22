import { IJsFixConfig, IJsFixLogger } from '../../config';
import { FixEntity } from '../fix-entity';
export declare class HttpInitiator extends FixEntity {
    readonly config: IJsFixConfig;
    logger: IJsFixLogger;
    constructor(config: IJsFixConfig);
    start(): Promise<any>;
    connect(config: IJsFixConfig): Promise<any>;
}
