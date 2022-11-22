import { MsgParser } from '../../buffer';
import { MsgTransmitter } from '../msg-transmitter';
import { FixDuplex } from '../duplex';
import { IJsFixConfig } from '../../config';
export declare class MsgTransport {
    readonly id: number;
    readonly config: IJsFixConfig;
    readonly duplex: FixDuplex;
    readonly transmitter: MsgTransmitter;
    readonly receiver: MsgParser;
    constructor(id: number, config: IJsFixConfig, duplex: FixDuplex);
    end(): void;
    wait(): Promise<any>;
}
