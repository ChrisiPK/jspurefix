import { IJsFixConfig } from '../../config';
import { FixSession } from '../session/fix-session';
import { FixEntity } from '../fix-entity';
export declare class TcpInitiatorConnector extends FixEntity {
    readonly config: IJsFixConfig;
    constructor(config: IJsFixConfig);
    start(reconnectTimeout?: number): Promise<any>;
    delay(p: number): Promise<any>;
    connect(initiatorSession: FixSession): Promise<any>;
}
