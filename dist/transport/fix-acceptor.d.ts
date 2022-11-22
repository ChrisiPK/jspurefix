/// <reference types="node" />
import * as events from 'events';
import { MsgTransport } from './factory';
import { INumericKeyed } from '../collections/collection';
import { IMsgApplication } from './msg-application';
export declare abstract class FixAcceptor extends events.EventEmitter {
    readonly application: IMsgApplication;
    transports: INumericKeyed<MsgTransport>;
    protected constructor(application: IMsgApplication);
    abstract listen(): void;
    abstract close(cb: Function): void;
}
