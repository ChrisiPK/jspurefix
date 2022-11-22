import { IJsFixConfig } from '../../config';
import { MsgTransmitter } from '../msg-transmitter';
import { ILooseObject } from '../../collections/collection';
export declare class FixmlMsgTransmitter extends MsgTransmitter {
    readonly config: IJsFixConfig;
    time: Date;
    constructor(config: IJsFixConfig);
    encodeMessage(msgType: string, obj: ILooseObject): void;
}
