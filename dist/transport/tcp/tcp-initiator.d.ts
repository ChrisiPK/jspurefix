import { FixInitiator } from '../fix-initiator';
import { MsgTransport } from '../factory';
import { IJsFixConfig } from '../../config';
import { ITcpTransportDescription } from './tcp-transport-description';
export declare enum InitiatorState {
    Idle = 1,
    Connecting = 2,
    Connected = 3,
    Stopped = 4
}
export declare class TcpInitiator extends FixInitiator {
    readonly jsFixConfig: IJsFixConfig;
    tcp: ITcpTransportDescription;
    state: InitiatorState;
    private readonly logger;
    private duplex;
    private th;
    constructor(jsFixConfig: IJsFixConfig);
    end(): void;
    connect(timeoutSeconds: number): Promise<MsgTransport>;
    private unsecureDuplex;
    private tlsDuplex;
    private tryConnect;
    clearTimer(): void;
    private repeatConnect;
}
