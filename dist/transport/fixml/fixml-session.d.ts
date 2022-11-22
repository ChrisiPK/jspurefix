import { MsgView } from '../../buffer';
import { IJsFixConfig } from '../../config';
import { FixSession } from '../session/fix-session';
export declare abstract class FixmlSession extends FixSession {
    readonly config: IJsFixConfig;
    protected constructor(config: IJsFixConfig);
    protected onMsg(msgType: string, view: MsgView): void;
    protected onSessionMsg(msgType: string, view: MsgView): void;
    private peerLogon;
}
