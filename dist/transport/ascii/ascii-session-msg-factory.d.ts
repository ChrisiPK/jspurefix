import { ISessionDescription } from '../session/session-description';
import { ILooseObject } from '../../collections/collection';
import { ASessionMsgFactory, ObjectMutator } from '../session/a-session-msg-factory';
import { IStandardHeader } from '../../types/FIX4.4/repo';
export declare class AsciiSessionMsgFactory extends ASessionMsgFactory {
    readonly description: ISessionDescription;
    constructor(description: ISessionDescription, mutator?: ObjectMutator);
    logon(): ILooseObject;
    logout(text: string): ILooseObject;
    header(msgType: string, seqNum: number, time: Date, overrideData?: Partial<IStandardHeader>): ILooseObject;
}
export declare class SessionMsgFactory extends AsciiSessionMsgFactory {
    readonly description: ISessionDescription;
    mutator: ObjectMutator;
    constructor(description: ISessionDescription, mutator?: ObjectMutator);
}
