import { MsgTransmitter } from '../msg-transmitter';
import { ILooseObject } from '../../collections/collection';
import { IJsFixConfig } from '../../config';
export declare class AsciiMsgTransmitter extends MsgTransmitter {
    readonly config: IJsFixConfig;
    msgSeqNum: number;
    time: Date;
    private readonly header;
    private readonly trailer;
    constructor(config: IJsFixConfig);
    private checksum;
    encodeMessage(msgType: string, obj: ILooseObject): void;
}
