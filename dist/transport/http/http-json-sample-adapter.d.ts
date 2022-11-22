/// <reference types="node" />
import { IJsFixConfig } from '../../config';
import { IHttpAdapter } from './http-adapter';
import { IHtmlOptions } from './html-options';
export declare class HttpJsonSampleAdapter implements IHttpAdapter {
    readonly config: IJsFixConfig;
    private logger;
    private queue;
    private token;
    private routes;
    constructor(config: IJsFixConfig);
    getOptions(data: Buffer): IHtmlOptions;
    endMessage(m: any): Buffer;
    beginMessage(msgType: string): void;
}
