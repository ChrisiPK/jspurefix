import { MsgView } from '../../../buffer';
import { AsciiSession } from '../../../transport';
import { IJsFixConfig } from '../../../config';
export declare class SkeletonClient extends AsciiSession {
    readonly config: IJsFixConfig;
    readonly logoutSeconds: number;
    private readonly logger;
    private readonly fixLog;
    constructor(config: IJsFixConfig, logoutSeconds: number);
    protected onApplicationMsg(msgType: string, view: MsgView): void;
    protected onDecoded(msgType: string, txt: string): void;
    protected onEncoded(msgType: string, txt: string): void;
    protected onLogon(view: MsgView, user: string, password: string): boolean;
    protected onReady(view: MsgView): void;
    protected onStopped(): void;
}
