/// <reference types="node" />
import { FixAcceptor } from '../fix-acceptor';
import { IJsFixConfig } from '../../config';
import { TlsOptions } from 'tls';
export declare class TcpAcceptor extends FixAcceptor {
    readonly config: IJsFixConfig;
    private server;
    private logger;
    private nextId;
    constructor(config: IJsFixConfig);
    getId(): number;
    tlsServer(): void;
    unsecureServer(): void;
    tlsOptions(): TlsOptions;
    private onSocket;
    listen(): void;
    close(callback?: (err?: Error) => void): void;
    private saveTransport;
    private harvestTransport;
}
