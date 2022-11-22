import { IFixMsgStore } from './fix-msg-store';
import { IJsFixConfig, IJsFixLogger } from '../config';
import { IFixMsgStoreRecord } from './fix-msg-store-record';
import { IFixMsgStoreState } from './fix-msg-store-state';
export declare class FixMsgMemoryStore implements IFixMsgStore {
    readonly id: string;
    readonly config: IJsFixConfig;
    protected readonly logger: IJsFixLogger;
    heartbeat: boolean;
    private sortedBySeqNum;
    private excluded;
    length: number;
    private sessionMessages;
    constructor(id: string, config: IJsFixConfig);
    static search(ar: IFixMsgStoreRecord[], target?: number, isDate?: boolean): number;
    getMsgType(msgType: string): Promise<IFixMsgStoreRecord[]>;
    private getIndex;
    private bounded;
    get(from: number): Promise<IFixMsgStoreRecord>;
    getSeqNumRange(from: number, to?: number): Promise<IFixMsgStoreRecord[]>;
    private buildState;
    getState(): Promise<IFixMsgStoreState>;
    clear(): Promise<IFixMsgStoreState>;
    put(record: IFixMsgStoreRecord): Promise<IFixMsgStoreState>;
    setExcMsgType(exclude: string[]): void;
    private excludeRange;
    exists(seqNum: number): Promise<boolean>;
}
