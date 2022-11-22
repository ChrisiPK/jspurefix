import { IJsFixConfig } from '../../config';
import { FixEntity } from '../fix-entity';
export declare class HttpAcceptorListener extends FixEntity {
    readonly config: IJsFixConfig;
    constructor(config: IJsFixConfig);
    start(): Promise<any>;
}
