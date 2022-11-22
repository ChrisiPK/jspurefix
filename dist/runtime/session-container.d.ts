import { DependencyContainer } from 'tsyringe';
import { IJsFixConfig, JsFixLoggerFactory } from '../config';
import { ISessionMsgFactory, ISessionDescription } from '../transport';
export declare class SessionContainer {
    reset(): void;
    registerGlobal(loggerFactory?: JsFixLoggerFactory): void;
    registerGlobal(level: string): void;
    protected makeSessionFactory(description: ISessionDescription): ISessionMsgFactory;
    newChild(description: ISessionDescription): DependencyContainer;
    makeSystem(description: ISessionDescription): Promise<DependencyContainer>;
    isAscii(description: ISessionDescription): boolean;
    isInitiator(description: ISessionDescription): boolean;
    asAscii(description: ISessionDescription, sessionContainer: DependencyContainer): void;
    asFixml(description: ISessionDescription, sessionContainer: DependencyContainer): void;
    protected asciiConstants(c: IJsFixConfig, sessionContainer: DependencyContainer): void;
    registerSession(c: IJsFixConfig, sessionContainer: DependencyContainer): void;
}
