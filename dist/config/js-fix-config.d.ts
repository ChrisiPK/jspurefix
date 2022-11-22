import { FixDefinitions } from '../dictionary/definition';
import { ISessionDescription, ISessionMsgFactory } from '../transport';
import { JsFixLoggerFactory } from './js-fix-logger-factory';
import { DependencyContainer } from 'tsyringe';
export interface IJsFixConfig {
    factory: ISessionMsgFactory;
    definitions: FixDefinitions;
    description: ISessionDescription;
    delimiter?: number;
    logDelimiter?: number;
    logFactory: JsFixLoggerFactory;
    sessionContainer: DependencyContainer;
}
export declare class JsFixConfig implements IJsFixConfig {
    readonly factory: ISessionMsgFactory;
    readonly definitions: FixDefinitions;
    readonly description: ISessionDescription;
    readonly delimiter: number;
    readonly logFactory: JsFixLoggerFactory;
    logDelimiter: number;
    sessionContainer: DependencyContainer;
    constructor(factory: ISessionMsgFactory, definitions: FixDefinitions, description: ISessionDescription, delimiter?: number, logFactory?: JsFixLoggerFactory);
}
