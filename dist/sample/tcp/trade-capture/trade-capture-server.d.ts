import { MsgView } from '../../../buffer';
import { AsciiSession } from '../../../transport';
import { IJsFixConfig } from '../../../config';
export declare class TradeCaptureServer extends AsciiSession {
    readonly config: IJsFixConfig;
    private readonly logger;
    private readonly fixLog;
    private readonly tradeFactory;
    private timerHandle;
    constructor(config: IJsFixConfig);
    protected onApplicationMsg(msgType: string, view: MsgView): void;
    protected onReady(view: MsgView): void;
    protected onStopped(): void;
    protected onLogon(view: MsgView, user: string, password: string): boolean;
    protected onDecoded(msgType: string, txt: string): void;
    protected onEncoded(msgType: string, txt: string): void;
    private tradeCaptureReportRequest;
}
