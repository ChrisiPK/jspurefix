/// <reference types="node" />
/// <reference types="node" />
import { MsgEncoder, ElasticBuffer } from '../buffer';
import { FixDefinitions } from '../dictionary/definition';
import { Transform } from 'stream';
import { ILooseObject } from '../collections/collection';
import { ISessionDescription } from './session/session-description';
import * as events from 'events';
export declare abstract class MsgTransmitter extends events.EventEmitter {
    readonly buffer: ElasticBuffer;
    readonly definitions: FixDefinitions;
    readonly session: ISessionDescription;
    readonly encodeStream: Transform;
    encoder: MsgEncoder;
    protected constructor(buffer: ElasticBuffer, definitions: FixDefinitions, session: ISessionDescription);
    send(msgType: string, obj: ILooseObject): void;
    abstract encodeMessage(msgType: string, obj: ILooseObject): void;
    private encoderStream;
}
