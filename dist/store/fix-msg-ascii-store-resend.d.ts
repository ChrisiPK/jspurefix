import { IFixMsgStore } from './fix-msg-store';
import { IFixMsgStoreRecord } from './fix-msg-store-record';
import { IJsFixConfig } from '../config';
import { AsciiParser } from '../buffer/ascii';
export declare class FixMsgAsciiStoreResend {
    readonly store: IFixMsgStore;
    readonly config: IJsFixConfig;
    parser: AsciiParser;
    constructor(store: IFixMsgStore, config: IJsFixConfig);
    getResendRequest(startSeq: number, endSeq: number): Promise<IFixMsgStoreRecord[]>;
    private inflateRange;
    gap(beginGap: number, seqNum: number, arr: IFixMsgStoreRecord[]): void;
    inflate(record: IFixMsgStoreRecord): void;
    sequenceResetGap(startGap: number, newSeq: number): IFixMsgStoreRecord;
}
