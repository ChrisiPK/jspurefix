import { AsciiSessionMsgFactory } from '../../transport/ascii';
import { FixDuplex } from '../../transport';
import { Setup } from './setup';
import { MsgView } from '../../buffer';
import { IJsFixConfig } from '../../config';
import { MsgTransport } from '../../transport/factory';
declare class FixEntity {
    readonly config: IJsFixConfig;
    readonly duplex: FixDuplex;
    readonly transport: MsgTransport;
    readonly views: MsgView[];
    readonly errors: Error[];
    constructor(config: IJsFixConfig, duplex?: FixDuplex, transport?: MsgTransport);
}
export declare class Experiment {
    readonly client: FixEntity;
    readonly clientFactory: AsciiSessionMsgFactory;
    readonly serverFactory: AsciiSessionMsgFactory;
    readonly server: FixEntity;
    loopBack(lhs: FixDuplex, rhs: FixDuplex): void;
    constructor(setup: Setup);
}
export {};
