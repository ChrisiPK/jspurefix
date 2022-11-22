import { IJsFixConfig } from '../../config';
import { FixEntity } from '../fix-entity';
export declare class TcpAcceptorListener extends FixEntity {
    readonly config: IJsFixConfig;
    constructor(config: IJsFixConfig);
    start(): Promise<any>;
}
