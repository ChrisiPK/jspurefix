import { IJsFixConfig } from '../../config';
import { FixSession } from '../session/fix-session';
import { SessionState } from '../session/session-state';
import { ITcpTransportDescription } from './tcp-transport-description';
import { FixEntity } from '../fix-entity';
export declare class RecoveringTcpInitiator extends FixEntity {
    readonly jsFixConfig: IJsFixConfig;
    tcp: ITcpTransportDescription;
    session: FixSession;
    private readonly logger;
    private application;
    private initiator;
    private transport;
    private th;
    recoveryAttemptSecs: number;
    backoffFailConnectSecs: number;
    constructor(jsFixConfig: IJsFixConfig);
    private createSession;
    getState(): SessionState;
    private newTransport;
    private clearTimer;
    private recover;
    start(): Promise<any>;
    run(initialTimeout?: number): Promise<any>;
    private connect;
}
