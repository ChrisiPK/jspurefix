import { MsgView } from '../../../buffer';
import { AsciiSession } from '../../../transport';
import { IJsFixConfig } from '../../../config';
import { ILooseObject } from '../../../collections/collection';
export declare class SkeletonSession extends AsciiSession {
    readonly config: IJsFixConfig;
    readonly logoutSeconds: number;
    useInMemoryStore: boolean;
    private readonly logger;
    private readonly fixLog;
    constructor(config: IJsFixConfig, logoutSeconds: number, useInMemoryStore: boolean);
    protected onApplicationMsg(msgType: string, view: MsgView): void;
    private dispatch;
    sendMessage(msgType: string, obj: ILooseObject): void;
    protected onDecoded(msgType: string, txt: string): void;
    protected onEncoded(msgType: string, txt: string): void;
    protected onLogon(view: MsgView, user: string, password: string): boolean;
    protected onReady(view: MsgView): void;
    protected onStopped(): void;
}
