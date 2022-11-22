/// <reference types="node" />
import { ILooseObject } from '../collections/collection';
export declare class MsgPayload {
    readonly msgType: string;
    readonly obj: ILooseObject;
    encoded: Buffer;
    constructor(msgType: string, obj: ILooseObject);
}
