import { MsgView } from '../../buffer';
import { IJsFixConfig } from '../../config';
import { FixSession } from '../session/fix-session';
import { FixMsgAsciiStoreResend, IFixMsgStore } from '../../store';
export declare abstract class AsciiSession extends FixSession {
    readonly config: IJsFixConfig;
    heartbeat: boolean;
    protected store: IFixMsgStore;
    protected resender: FixMsgAsciiStoreResend;
    protected constructor(config: IJsFixConfig);
    private checkSeqNo;
    protected checkForwardMsg(msgType: string, view: MsgView): void;
    private sendReject;
    protected sendResendRequest(lastSeq: number, receivedSeq: number): void;
    private checkIntegrity;
    protected onResendRequest(view: MsgView): void;
    okForLogon(): boolean;
    protected onSessionMsg(msgType: string, view: MsgView): void;
    protected onMsg(msgType: string, view: MsgView): void;
    private startTimer;
    private peerLogon;
    private sendTestRequest;
    private sendHeartbeat;
    private tick;
}
