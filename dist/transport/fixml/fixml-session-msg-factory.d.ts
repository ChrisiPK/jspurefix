import { ISessionDescription } from '../session/session-description';
import { ILooseObject } from '../../collections/collection';
import { ASessionMsgFactory, ObjectMutator } from '../session/a-session-msg-factory';
import { IStandardHeader } from '../../types/FIXML50SP2';
export declare class FixmlSessionMsgFactory extends ASessionMsgFactory {
    readonly description: ISessionDescription;
    constructor(description: ISessionDescription, mutator?: ObjectMutator);
    logon(userRequestId?: string, isResponse?: boolean): ILooseObject;
    logout(msgType: string, text: string): ILooseObject;
    header(msgType: string, seqNum?: number, time?: Date, overrideData?: Partial<IStandardHeader>): ILooseObject;
    private fixmlLogon;
    private fixmlLogout;
}
