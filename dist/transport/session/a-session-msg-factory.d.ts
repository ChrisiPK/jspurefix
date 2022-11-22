import { ISessionMsgFactory } from './session-msg-factory';
import { ISessionDescription } from './session-description';
import { ILooseObject } from '../../collections/collection';
import { IStandardHeader } from '../../types/FIX4.4/repo';
export interface ObjectMutator {
    (description: ISessionDescription, type: string, o: ILooseObject): ILooseObject;
}
export declare abstract class ASessionMsgFactory implements ISessionMsgFactory {
    readonly description: ISessionDescription;
    mutator: ObjectMutator;
    isAscii: boolean;
    constructor(description: ISessionDescription, mutator?: ObjectMutator);
    reject(msgType: string, seqNo: number, msg: string, reason: number): ILooseObject;
    abstract logon(userRequestId: string, isResponse: boolean): ILooseObject;
    abstract logout(msgType: string, text: string): ILooseObject;
    abstract header(msgType: string, seqNum: number, time: Date, overrideData?: Partial<IStandardHeader>): ILooseObject;
    protected mutate(o: ILooseObject, type: string): ILooseObject;
    testRequest(reqId?: string): ILooseObject;
    heartbeat(testReqId: string): ILooseObject;
    resendRequest(from: number, to: number): ILooseObject;
    sequenceReset(newSeqNo: number, gapFill?: boolean): ILooseObject;
    trailer(checksum: number): ILooseObject;
}
