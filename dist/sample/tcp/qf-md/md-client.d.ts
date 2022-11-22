import { MsgView } from '../../../buffer';
import { AsciiSession } from '../../../transport';
import { IJsFixConfig } from '../../../config';
export declare class MDClient extends AsciiSession {
    readonly config: IJsFixConfig;
    private readonly logger;
    private readonly fixLog;
    constructor(config: IJsFixConfig);
    protected onApplicationMsg(msgType: string, view: MsgView): void;
    protected onStopped(): void;
    protected onDecoded(msgType: string, txt: string): void;
    protected onEncoded(msgType: string, txt: string): void;
    protected onReady(view: MsgView): void;
    protected onLogon(view: MsgView, user: string, password: string): boolean;
}
