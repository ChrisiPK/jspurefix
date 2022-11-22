import { FixAcceptor } from '../fix-acceptor';
import { IJsFixConfig } from '../../config';
export declare class HttpAcceptor extends FixAcceptor {
    readonly config: IJsFixConfig;
    private app;
    private server;
    private readonly logger;
    private readonly router;
    private nextId;
    private keys;
    constructor(config: IJsFixConfig);
    listen(): void;
    close(callback?: (err?: Error) => void): void;
    private saveTransport;
    private harvestTransport;
    private respond;
    private logon;
    private logout;
    private subscribe;
}
