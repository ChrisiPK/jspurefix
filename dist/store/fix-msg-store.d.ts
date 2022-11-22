import { IFixMsgStoreRecord } from './fix-msg-store-record';
import { IFixMsgStoreState } from './fix-msg-store-state';
export interface IFixMsgStore {
    clear(): Promise<IFixMsgStoreState>;
    getState(): Promise<IFixMsgStoreState>;
    put(record: IFixMsgStoreRecord): Promise<IFixMsgStoreState>;
    get(seq: number): Promise<IFixMsgStoreRecord>;
    exists(seq: number): Promise<boolean>;
    getSeqNumRange(from: number, to?: number): Promise<IFixMsgStoreRecord[]>;
    getMsgType(msgType: string): Promise<IFixMsgStoreRecord[]>;
}
