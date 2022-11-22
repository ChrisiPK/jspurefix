import { FixMsgAsciiStoreResend, FixMsgStoreRecord, IFixMsgStore } from '../../store';
import { MsgView } from '../../buffer';
import { IJsFixConfig } from '../../config';
export declare class TestRecovery {
    readonly views: MsgView[];
    readonly config: IJsFixConfig;
    readonly store: IFixMsgStore;
    readonly records: FixMsgStoreRecord[];
    readonly recovery: FixMsgAsciiStoreResend;
    constructor(views: MsgView[], config: IJsFixConfig);
    populate(): Promise<void>;
    getRecords(comp: string): FixMsgStoreRecord[];
}
