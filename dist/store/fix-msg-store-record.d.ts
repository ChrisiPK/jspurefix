import { ILooseObject } from '../collections/collection';
import { MsgView } from '../buffer';
export interface IFixMsgStoreRecord {
    readonly msgType: string;
    readonly timestamp: Date;
    readonly seqNum: number;
    obj?: ILooseObject;
    readonly encoded?: string;
    clone(): IFixMsgStoreRecord;
}
export declare class FixMsgStoreRecord implements IFixMsgStoreRecord {
    readonly msgType: string;
    readonly timestamp: Date;
    readonly seqNum: number;
    obj?: ILooseObject;
    readonly encoded?: string;
    constructor(msgType: string, timestamp: Date, seqNum: number, obj?: ILooseObject, encoded?: string);
    static toMsgStoreRecord(v: MsgView): IFixMsgStoreRecord;
    clone(): IFixMsgStoreRecord;
}
