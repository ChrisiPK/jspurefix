import { MsgView } from '../../../buffer';
import { AsciiSession } from '../../../transport';
import { IJsFixConfig } from '../../../config';
export declare class TradeCaptureClient extends AsciiSession {
    readonly config: IJsFixConfig;
    private readonly logger;
    private readonly fixLog;
    private reports;
    constructor(config: IJsFixConfig);
    protected onApplicationMsg(msgType: string, view: MsgView): void;
    protected onStopped(): void;
    protected onDecoded(msgType: string, txt: string): void;
    protected onEncoded(msgType: string, txt: string): void;
    private logoutTimer;
    protected onReady(view: MsgView): void;
    protected onLogon(view: MsgView, user: string, password: string): boolean;
}
