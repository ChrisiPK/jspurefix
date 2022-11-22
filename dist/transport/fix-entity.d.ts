/// <reference types="node" />
import { IJsFixConfig } from '../config';
import * as events from 'events';
export declare abstract class FixEntity extends events.EventEmitter {
    readonly config: IJsFixConfig;
    abstract start(): Promise<any>;
    constructor(config: IJsFixConfig);
}
