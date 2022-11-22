import { MsgTransport } from './factory';
import { IMsgApplication } from './msg-application';
export declare abstract class FixInitiator {
    readonly application: IMsgApplication;
    protected constructor(application: IMsgApplication);
    abstract connect(timeout: number): Promise<MsgTransport>;
    abstract end(): void;
}
