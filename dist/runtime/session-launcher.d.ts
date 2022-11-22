import { IJsFixConfig, IJsFixLogger, JsFixLoggerFactory } from '../config';
import { ISessionDescription } from '../transport';
import { DependencyContainer } from 'tsyringe';
import { EngineFactory } from './engine-factory';
import { SessionContainer } from './session-container';
export declare abstract class SessionLauncher {
    private readonly loggerFactory;
    root: string;
    protected readonly logger: IJsFixLogger;
    readonly initiatorConfig: ISessionDescription;
    readonly acceptorConfig: ISessionDescription;
    protected constructor(initiatorConfig: string | ISessionDescription, acceptorConfig?: string | ISessionDescription, loggerFactory?: JsFixLoggerFactory);
    protected sessionContainer: SessionContainer;
    private empty;
    protected getAcceptor(sessionContainer: DependencyContainer): Promise<any>;
    protected getInitiator(sessionContainer: DependencyContainer): Promise<any>;
    protected makeFactory(config: IJsFixConfig): EngineFactory;
    run(): Promise<any>;
    exec(): void;
    isAscii(description: ISessionDescription): boolean;
    isInitiator(description: ISessionDescription): boolean;
    protected registerApplication(sessionContainer: DependencyContainer): void;
    private makeSystem;
    private register;
    private makeClient;
    private makeServer;
    private setup;
    private loadConfig;
}
